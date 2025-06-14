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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGOKO4ZK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGnRVrzLmVZYwWDIKJ9RZQxaKM2z9gkltteGbsAQ6BafAiAbN7e36gROcY52BRvYe%2B7XopCEohIw7XKFlUFqAEKZkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMzv3QfwBBV9NTamPmKtwDz7w3Yy%2BgPNaZHkS48TWqeXgBLvm9r%2BA%2Bec%2FdFTNlPwopucGvNt5gBb8vTOxuyRh2XcaA4d%2FVADyuslweFhMCO%2Fjx1dzFq%2BhbmX3Vf6I2mBNTERnZskVmv3V9wLii1xqd%2F%2BKSM6JorMEkbI0%2FJaiVrLHKsqx1NPG8n3NEb3Svn0nkrUGoonCLQb5l7CyETe1zE9ba%2FR2Oo1hm11IEPOQlg4U%2FlaI5yiuC6bcFlOCFGQaZqcwaavNDjEz%2Fb3n2nQzUKEoxGJNByau3Y3jjOZxXokR54Jn9%2FwPyHz1RDMuKyKwAQAgU7oHH2lQaTWIl6Cmz7xoF6EPNvoEyGmySmu3XLyNB%2FpXRaOOIjye7%2B1b7f2oGfpfptq9XaXVXFC%2FQ1KNgQBWDuesC0JcIzmOPwZmNILGV5YWEk7%2BjQuhML1wJoRQkfTEcciges5Xr%2BhgUNJLZnd1ITOz%2FQlUuZ9x1NRcepTUJUJuLyoLSBoL22dft1ZXFgRjH7vVBMbCxtA%2BCe%2FuhwPM9ddZKY8LzdklBWffj2Wrf%2Bx58t0b9dR6XP3GpTh3EvZ%2B4kjwPQzrx%2F%2BuexmQ0jdINkxvC%2F08miOxl6nVsK49DYK%2FfloaE%2Fd2ECOyX1QW5%2FJdBaAoZsyVx%2Bvgwt8K1wgY6pgG9jxnZbyPT%2BNBhFYtkcnHU6ggZw1xO0Uu8BgBtl55FT71p04WC0xQ7PyKJybgM7gmnRwYzoRK0ZJzHlGb9gz8ZzhpMKIO7zUxOFgv095%2BNQAWalhszbzDOxRpwF5%2FANz9pU1OFB0MzWSsFF6tI3sWnpJvnh0udRW3m5wNBuAx9EozvU2xqRI8uKU16PKqWG5MXqoaVi95keCy18lQjB6jjMdxGAIPF&X-Amz-Signature=09d76dd2938212e4c92b3bbf742b88b74071068524e8cdbd5c3fe71279710e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
