---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO55PLM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgLjapGXdu0QlWcmHeHTXKMtcz5a%2F51mSQKP4bke3EVAiEAz5jIkL2MM6j6IYKsWcUuG37IGzUZZuPn%2Fbgabwj9jqgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDP44HJV0hAwmlKC6%2FyrcA0v8EVol8LZSVZ4pkjJiU95f9Z6KO8N2p2jLmdrxOwdmAlu3%2F4xyi2N04JNsGiKIf7vL5rF%2BKfXwdKD8YGqLK5ZJjmHiaGBHqG1Ra1NegO2HRL8RUrC5j4%2Bu5xrfrlTV0PK9wU7mC8D%2FvtbUUtWLKmzkUDH5jZT63QKbDp%2BqqEbzKmZTdcZF7NQB4r6k0B2k6sl9iXqU8CQnOoJ7xGp%2Bw2o%2FfHayd6iW9KRM1D8zY%2FZ7IlvIiUaok%2BEhdRyUS71lUbaBruKC7t3ppAADYjKktBPKCdiUu3ZwIJti6GqJabP2VHT32K0%2BDH5SU5YcCPy46MQS73J5vCTg9PiHs0J4%2BokQQzzVzOzQUcmBY3ChAEml9JpT%2B9mmDpsGIX0FFU54LCd1U7ReJsIWEfXhdd7rH%2FawwoFgREAiry43%2Bf1s2m%2BZkIHwYzTVXvBTn86Mr7Kv6WOYtqQm1duqrKZ1kLjH9rJWcWzheFDt0wjyrI5ZU8kIJd3816iD2L1m5QlCqPFw6GhCtu59jgpsFWciMfhgLvFK1mFowtqoeY1rwSS19UrehN%2BJjh62ansqF4hW%2BLThE1OmgmgjCUgcAnuzqLS495tPH28PBDzmJcMP9fB00NcjtDUBW5lKpb8rrn%2F2MIHhgsAGOqUBai0rgdbL%2BLYlxehk5qJTb%2BNFOBk3Emu9VhZXhpvntYkVU5EaKv%2F16UPX%2FM082Fa97R7z92zKpQq9iuPoTOJQyaPLOQNCWR8HaduqOHkHj44Tj97wqx9gz4sDK4qFtjP7rkZ6Lrvw2IYpXH3jdG5Rod5eIiHkxXiVhTA577Jj6Ki94g4GXkD%2BH%2B8hX3YR3U1PBMDQqS2Y7umwVNV1G%2BCqKFKrrhk%2B&X-Amz-Signature=995775725b134ce10dc816a0e1ec169398614c7d590202235cd927ac71a67928&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
