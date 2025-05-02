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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEL7HC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIExYFxFpBUIhxhu%2F%2FuheEBE2SHcI3bFht%2F%2BO9ktLxcZNAiEAq6N8u23%2B2G6ywBidKNMesCEYoMaiyeK1TKXTBc4jJzQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5eJwRehzXctMrRyrcA3bLAwEl13zNyeuabx5Js4thdjZ%2FLBNYw3%2FZBrO7lfVmldee%2BXwiSy1R5fARvoJlbQZXvEVjC4vKPMXAGmHzfUbVr%2BbrOzQDpeWPNUJCSSX7sQaajI6J%2FwlG%2FFk9k7jfoYZWOYjyxRiHWOL%2FX7xsuJnTXCfuPAmqUC6J9Vt1Fv3UaRAlfzbKvz0ebNxVHqPZzjcVKLh9CKXgwqHEwSMRNmRyWkCUHOeFguy5BYZS4dcaUiGw7L1YpDOgzBwUNW0Asgb%2F9vWhxRtG4kR4eP2m2gJZX%2B%2BGAw44z%2BID0V9TikLLqx6Wzjrstn2pltKkS27OArO%2F8WJj3uUFPqx0GHO6orLCaV3pOLvKDp8TS1aokDQKsiO5hMQEeEedmTkyliS5StRjPbfdJ2fXEyLmU2wZRGDroAQ2Fbvy%2FovbSdfTB2ig%2BmDPes0ALQlP82DVM%2FdqHy7VXgv%2BQaq1dVY9YqmXRV42zNrpGl5WHrH%2Fb38gRQ9fjiZmbpC0IX99bpJWYrsM1PGB58eUkRwGOX8ZCJuTK6b0rhp3BV73lpcDNtJQi0iT6f5t5g7rAVSzeriDo48KObAT9prykjRyJmFf9V%2FSeh1EBjX%2BSq4af%2FgqWXcirxZOXcJdk3C9oaBVu0GMMI290cAGOqUBfv8XQBtmYjKHh%2BxZlX%2FDgQYs8%2FoLcjZiQbyPrwGVAfoWzy%2BExFun5GNJ137AebcbjTVLc6%2FC7VFECockoN9mmNWQ4R1XAs3kFFSzkozpHzgBZVvxA6JOPOckJlpStsKbEZ9UTHMo%2F%2Bv%2Bg%2BxvXFT%2BWNrBlVtjcXT5hagWg3l3JIhSXNlUu8%2B2WiURkxgNmNPB9uCwz3QLFbt6ORiYziqQXs0SFFYs&X-Amz-Signature=281c03c6455a45fb5a2e1bfc3a33e549cec95edcd608b11b67cea95cfd03419a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
