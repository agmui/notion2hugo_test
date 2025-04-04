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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNYXOLU4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1eK6%2BdKYZnnVnG8VsveEABZeVH4K1mRLIDNUEeOBxEAIhAMqoUQDuvTksiK9XLeWOV2LNzLjdRT9m1GrFYzX%2F9LH2Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwP0HiayCI5coIgA6Eq3AM2zyCZtQLvOpCOZS8iaLu%2BfnMEmQHenSEKXgpgYfuJvcWF%2FG%2Fs82ilBmC6tiguMN6f%2F3MEoIfAqozqcjf9CsId79Bk%2BqYlBLu%2FTqgTzUkruGUpDxXT2RkcpRb7ldUoXXwRY%2BTNxgBEB3QRN0qYYWIKQYQykFy4h6owzk3DWYcPJo%2BWXZJ0F07F3FwPTRKt5n2%2BCV1jueIN0EDrMHYw%2Fm449ZzpygxZkHvQJdi50krl3LT0wlpwMesx3i8s8T2UnoJ2xqqxY%2BfAeJ%2FPBcGiZc2iRz35QSK%2B6b4nipzD%2B8r0NuYY%2FUEhUUe6S3lhU%2FvMSxtTQEmYo4J7XKweWjSzbPj4Vgvc8q7M8PLEZ07CngJFxwVc8S3SXhmdKayOnmc83NwgE6EFy4l6MItm5Rzvf2wgAjbe%2FFQ7jCRTO%2BUznL2JGi1ujIrChZXWcs7bAkBaVxjyxaATABshzj1Ro9mQ2%2FMTgCWF%2Bve52kGoaJrod%2BM4rGVp1UnwQuPL%2BuzhkSHorRCfWXUsfEnBFikuG7515NFIry45boVflIbRfCEgOoC7GimRR49n3qJMO%2FKelDyavchsy%2FVsnsyC%2B0zlxnKhkSnWcR8LD1ll4O6Ymi3PBLTT9sF%2FashKtpxJtSZJszCu08C%2FBjqkAbdLJzWHBsZ9g20YSf%2FF%2Bw0DRZw50E4Nz5AJKC%2BjycnWCzGAs5Sqrnpe2Y8ggYNRSz4FnXvtvoc4eqUZdS6ScLlGrLqq4N%2B7sjUteUvOHXHle7319Iyf0cXzqY5lcRuldsdNGkg6b4Nf1x5WYkr0%2FtWfqkj2O1as%2BUk1TyKsqOUBgUl6wi%2FCqZusT1FEhJbuNEWMPqHPMCGxisBM%2FEvTK2fgeKpA&X-Amz-Signature=58a0334c9ad27ea7b8ef3082007b1a5590509d092cac81930fb50b03e6f8f330&X-Amz-SignedHeaders=host&x-id=GetObject)

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
