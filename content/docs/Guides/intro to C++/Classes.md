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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PQBRO57%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsFgwamwfZTMMbylWQ3Pr1YUeNa0LBfZhPPbQkLdzacwIhAPo434qmDELvd9a9yUt1WKOnU9frqATbGCrClIV5k0G4KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRgTCSizct%2FO%2Frm3gq3ANkoVcg3h8RQSElt4i0vfkM%2BNL4Ubeh6pgWGR13RzTRVvLTAweXfdhWp9N2gXPpgBJIIOocQrxMaSYzS3LvVcIygNuJRD60RcpAnakTymyukSUPSGxEKdUowJ3efBHUN7HeTGJ1hrxHk6iE1w%2FLHr8M2CPYtLNX3gmj6BvhXOg2e%2Blfkz4EJwglSjtDSqS3wUzdXU1nB1c6iHxTgNhWrntPR3tqZvFGYk8EAEImAE8fyNy9%2BkfX6a1KPe7siK1IBrQMgylfBZLUQbnAI%2BICBuYdn5xmDH7ye382uYaaRr0jpwOT9w6nt9w7CmfWsjsj21f9UAZEqmUda1%2B3UkS1DxzXjv5z4Es5FAH7xonmAvdR0FeZLlPwvytimg5YK%2F4xvZl2MYL4Hnhi61zPCPzdZQHkGkB7CKXBkLAIz0JWgmubqMDjMHzCyWjAigplQssbiNERj%2FsawJYNFLKWO71fqDDzGDVjUbsJ2uAKw1io30cfKrqKGI2LCIyNc3IrxB8IrJ30ethJajE15J5KX4s8aBFq01%2BnxS1%2Ba3fxHgA0XYEbjpcvQ7b5QmQ1ZRWRN%2Fj%2FVLHZ4SZjlUWOyqEmP9p%2F2hnbfWAEcYBRcjmE4YOmG9%2F%2BhExB0PzqHgPx9sjA8jCprs6%2BBjqkAbsQaahmLOkWhJUuVRmqpEb8nMxwTByNRgvCCy%2BNaDa5H7hX%2F9lnkMbCqkRYNnRBkBCJwZHad%2BL80pJLM%2BSakG7IVrObNQT6QS7vpdGuQsLpPnmpYWYeUeLNyi20DN02LfsoHuM%2FPbbfKAhX04tjV3Qex2gkKGLaA2ukjlgpdcffh7yHvMmXF3h6NLKysZj9my04bwUextbckBmQSLKgmMGCYL0S&X-Amz-Signature=23106c723b1e5e954c23a005363310146f710861ddfb6b4cfdb29bc2219105ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
