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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7JVMZXK%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFyFlGZ64sO5V90ajgoRNgecKE55leVK46P20vALyVPAiEAt2Is9e7ZqQF8fpK5MUrkObEaZ7NMYpE2nu8jGLmlrfcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOfw4ywIqzRTvxyS2CrcA5QgWRTujziPJMfTK%2FfXQV2YEjle346Me9gP6BAXYjfQExm5snuYHhdaRlzQtiRz9rwVJAr%2BUWA8pYZPYFzgbOjYUkfSfZCkitGO9BwdvblfdFiWIzG9jZBRefCaElTXZ0CYUZTGZ%2B1p1U5OkzFOFQSubCrQMghvgQXtM6tFcdFsvHTOdCHeoUL1G%2BxFrejzFV6IRStugJsD1SdgHYffivyO9yJrq3j4UZOPpHVP%2FTwufZsUKZIrn5oLkHCXEhxTPJ8Ii4AmH%2Fv2suCe6U%2Bo3zitb7oBji6XLd9BSSi4VUMfy4Gvm0IMxZ88Ih9RPzI41w8A2TpuLSgMoIdHxHQpaVKFzg1Ec0RuUl8Rcl2Q27b%2BmavPtQMmTB658SubVY7hHXphjLnqYJQcRocEyAxpC%2B5ms2hItbIzQ5JhYJIFj7hk%2FxBOJ4dXZ4Zw4ph1b58OihuAoIVyAY6F56sVs8J2hRDbmq2X2D%2FRHG5i65gIOt49QBYer0E%2B0NwMUptHu9AsEYLA%2BEs68%2F6mawXdP1K6laNdqPp%2B04gt7JJpp166H7rgtu%2FfPJ3ZZq4X164nc%2FaerL%2BdkoQcf7ufCC14PmMhPdEsBmUydQSxmG04LsuIGFzpIg90V2DuFLGmbNDcMIi%2FxMIGOqUBv%2FQ7Iinv69M36f03AMl9LEa0yqLDFOomeevfiMLv1vdRv1iaMDBrubbdu71s3O%2FYGR7RzWCMrsHNTK7%2B%2BWk%2BDqZxQ4BEjoDeP4ZRURieHIYtXMoiI1cjls%2FUjCdScVv%2FZ8VWTFPUT7nzplIWwLJB0iFLEeBJ7NFqdn1dCc16dM4%2F%2Ba%2F4McArlhG3E7KhEgXAKZP0OTUHcJ1EBydCJ6NDScJz6okT&X-Amz-Signature=247ce7f775978b08f40cc4f7ec22cb98eef6c4a7596aa34322c9913c25b09b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
