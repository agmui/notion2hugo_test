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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6FBVIQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF3%2B3UpVpl%2BEee8HcP5UJXDUXCS8pZA6yBH%2FZFIDR1bAiEA%2Fhn8Goq3GhtFTv8dtocMhAMa9HZAiqM9rjydtVzyLSEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDui%2F0glBTFsGPudCrcAx1CLnquXzhPoPgq7fMxIJaomsqWWJP0eqr%2FArfzPqrOoN9rKgsuQmifEt7gvtqFI%2FsnI5LAksZzH19OqT%2Bucqji6LgQfov0XTwHVLSIKNo17YbYNHNxIGBqNNp0XCL9hRg6Fx%2Bez7ZRD5XOOKRavf6z48STUus3fgnBUCBseJEsGDMNru%2FRzfgNkldVNSVABV4iVBcaSeKPcTI1L0NgMMQoZGk6kJiGrmn%2BXcqJ9y1WgS25O6a%2BDjx24txkgCMOo8qst2wZrjORPxipo4b3V7CJ6ioaN6d4b%2FeXw90qdfN8iYg%2F0lFjwiK4VO9P3r9fBzBU3RQ%2BEkMX77Mn3NZQIpUubQz9Tyr3P%2Bl3664oUjjYj5yy7lbht58a3YCAHg8RozjM0K%2Fc8%2F5dnIlIgT8Yph4qGDUJP4VoxGSxi6XFMVL2a5xxMr%2FXIbH5LqJwTnf2Nn1jwA7awXRBlT%2BEK1Tu6ID01eKVKcBUzG8T7S3D6V0C62AH1Ff3FAikG%2Bn7YzM1j5k1rqhBY39HNId2UObH3tXgxOo%2F%2FZbqwpyYIwyqv7796tCpL%2FH8vZn010WyVzDnnLE7eFswMgjWwVi3Mr0pI8sakJTt8ZVJwPc47FbBKArYJvI%2BM%2BKgxW5vk8gaMJ21xsMGOqUB5DA21FbwAjkWM2bOS%2FIOrrzLkhJ5bkSSqUr3uuQKCTt6X9zWAVfSU5%2FusrO3KPqc54L3Kg9fc7OLH7vWaoG4aSKjLNVCVvx8bvTsclausnbPMCO8gzcQbNySXMCjqgQVZsxC0mrKH%2Bx46YMWXPBa2zUhwiUm8KXOOJljJVwuc29phjpIYil1VvkagM4N0UVwuY3Z3aDUDHcQLoYXlxPKqUVFSXez&X-Amz-Signature=5e76a7303ec9b97f13fed4753c30799d398087c66a8e5c0d514da8a2c4cabfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
