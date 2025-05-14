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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3Y6YPH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCf3iD4lH5s3ClhIXq%2B9lAJ4Qo5%2BQ62nn3oprlEt4nXVQIhALUtPm%2BOlsUvmwCrAQR7YQghEkLUo0PWaDIY5Wprsn1nKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkackK%2BeP6aJP7GX8q3AOsvjJj%2FBU2SjXFhRtxkELyQp5YtmXJSbCeaojF4bK1dGv%2FisdujL%2BD%2FXy2liG5GJ9VK%2F2eEoo12x2RPuj0Cro2pCQtzz%2FhCb8QsrgQDyYSg7drrCqkY8xDHASYrTXEvodD3oKZfvpUP14uQE%2BrUPO2OT8LcnyIuxTDypBETTvy7pLu9GOyNjw6mfq4udXcAzHWF0ym3XGHfgi66tWLVVwCk4%2B6n5218Ym%2F8xp0sBN7iquumUGkFF8Qqr4j9k4kb5gWjpc74cvsrP6JRKjRj%2F5saPU8SKV%2BByPgxyXFvBV154Gnnsgm2Mz3wlYubmcr5oksu%2BDODvbrihlr6Lr2r32LPI5Mg3UwAQJ%2Bmnn9Ql557imcX0XffsOCiMnaz9KlbBwQFjPHxgm3Ln47hb%2BUl6RC4EtRaX3jwxYxOSSG89RIPCfshmsRyBVS91zEra62yXP6d%2FybjN2UNAdfb%2Bj1xqtzlRtkf9TTFP8L4nAD%2BLqFl2PnhATOEoYubOCK24NF4lDzdZPVtagECtBjz7uJkcb5gIKgslcSZJ4oORXXa10SFqC2CNnw96plc93OUyedjpcFpWyenTsafOHZ2NUZ42rM%2Ftsbnfe7Buxqwn3nBrrX%2F3Whd6ypqaXDqaW6NTCOuZDBBjqkAWrvSmaN%2BqdzjEczhNmHQmsy0MRckth9r2CBNPGlEl6hWCtHcvtK%2FOWV9Vjx5g2IZNpbt2MTBczAmU9X5YLI8i1OF1Wmbe%2B6IL%2Bf64C7hrAttXOq9%2Bc9qN0HuDGS59KL48oZO7fk1npZVNonBCVByLtIpC9TzPwqzOhq0dZ8T8gESOcn0PoehubNcB%2FAUQJik5xYBimLVISaDe8PzvsPYvwmgv6z&X-Amz-Signature=789cb72a3735ad65861aecda813f52dd4b425293bef094a35cc53e633143bb86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
