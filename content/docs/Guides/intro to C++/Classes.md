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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV366EZ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWN2ud5e0wdClXoIW3fKYiBAHfg23VVsTysgergwvGhAiEAxgICWanLRKIHOpTsr%2BVevwvaMk0FK8%2FHFF6o7HZC5pwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDL0UA6iHJaFEseWY2yrcA3UJTPniCAZFCCBlPCTW%2BTja0%2BQBx9dsXSEsKwErnW6325VSPKInXyqzni0%2FueY6VgON%2BWphLMV7IahYy2NfrdIn9yjco8JV%2ByKGi%2FbRdEbqspeJU03sOjhwEtVW7hiiUfWtzL4mnhxMPWyJbyZQRQ0eeOj2WpjeE9EzkA6tXTwDCzWhS7YRnziZ1%2BRMKNMAx5YuieUWXfRWdMxAbDVDAuFnoBmsK31Nwiv8rM2tTsgkw8hCUj6MoCoVvLlDKzYLdHN7r2b7KDuit%2FVhwFlm53su%2FPYsYHKhXeU9oCx2qgphkoBDZLOFswICQIXYUdaWgiueQCjbB9jnwEbmk9PE4He8E8IXazi0GHr8WuTwJiiBVuGI36KgMGnfmZBOg50FHzM42NyKyTNs9%2FyqJtSlkBNzY%2BhhkmKc9EfmP5Ot0LrceKtebqOg4PYbhR%2FWOvo4DHw%2BzfnkT2cJsF4qX%2FBPl01JUc%2BFOpoglQDMXmFrcA%2FvFY9e9UJWfMUwPcr7XOlgLdAnySREIiVtVjL14B6ndUs4FpTNUCLWZb6W8ShyUFacORcLRKFchn1CW%2FYld8HyIX48lwCC6EvhjzWj3KJn5HyVkZcURGfGNsQ8NQGSBd83IQZcaWSVPRVjA8K%2FMK72kL8GOqUBc%2FSXt4Y6lidFSnwYgG26i8i3HCfSsxePTOAPysFzlbryUSIrnpv6n1z9AdMN%2BbvtYXv1QYZPQPZPV93BYlaEKx9YyO7144LE%2Bl7eGfrijr3d9OQeWD3jdWexGPYB9s7u6LG772lKMPkVO34nps8ZWyr41DwE1inZNQGTwliWeQNWCJmdO3dPGjqRVLlDp7OBvlxzQt8YXvb%2BtGJM1E2ZCntztkVl&X-Amz-Signature=67141501d794f124d2d2daab26770b17d1ed5ee5064b9efe92d3cdc72561309b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
