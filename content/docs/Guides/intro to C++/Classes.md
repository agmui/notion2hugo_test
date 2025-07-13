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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKTEIND%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlgNfzMKEGippIsM2VI%2Fa880CaFi8jAS4%2Bb%2BR%2FraHCtAiA92GvepnQUHB7z7hrS%2FlChxCxRK2aYnolDV4bR3U86WSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMGuUZQBafBxfWE4XjKtwD6nlc4W2vGn1vTw6EPOAQ0himXOM3jbR7hVoD%2B1mffRueaev0%2Fcd%2FnzW2aqYxRe385N59vmY4uWL769RADc2D7apSH%2BHXW4BdQaFlUdrw%2BlZj96SWP64OdEhVXkCF1wMqTfa3HuUk2O6ZdAnqFKndrxPoQMwIpPB8kVSczJngt0WqtZCnBG2A%2Fz0x9jjKwjCsBMLZL3QdyygYQTxZ%2FWAdM49cmoWb8ZCLsM47cc7Wj3s2Ri%2FCF5s3azD5olTHJp8mn7NqJZotoApipf5j7nNA%2Bs%2FhLQ1Eed8CyyrpkM3KbIEiUgUj%2FtwneaL4v%2BhMSCikvTUyIRPhjX1ge1Kamj0jd3ntYL9MLOXT%2FQKPUYI1R6FURO0xHb4cW%2B8D%2BEqfZ2RHh0un2hI%2BEaqXyZbncyT%2BcFeMITWAwr44Uq3WfGxznKjvQDhBM2VCKj1DTox7uek6kPaB78W5uQnevOGlqJvKpbbPG0%2FIBUpGsewgfijBYHahJvdQ9KRRsOKUwpNGrvHDDRrVbItJHJ59Vo8UfJ08T%2B2xsPyCSUnpzicDGS0vGQJ1G3NpZdY8D7FW3xt5iSdxMN5dHD4o5Oqjl5pB%2FQdc3lP10EL0K80yq026oDgqeXfX0sIWqztsmv3d1JUw1JbPwwY6pgFSasCzOi%2BVyuyK1Bvw7OVy09R0obIDqAJbhuQ9IqYZw1hCUCA%2FD2mrQvftMEBS2IlYcMCadRmNkFVVhNwdSupxE758CuQSGmlNR%2F6rbnal2emnSdXxDfRZCQogvw4gzAT6DTe0Tk9XeCgTVM59AfkboLfoqFi%2BkoRDbuTQpIoRHsCplRXsqZt3p8BlrSdycT3hVt%2F52FEsHJy8XqFAE5tHyO%2FdJ%2FJB&X-Amz-Signature=c57da710d75e2d9ae7a347c01edc55652ee0ed656005aa1b70dbebcd3e171bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
