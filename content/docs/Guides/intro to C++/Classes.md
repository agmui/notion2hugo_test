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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJN5N4G%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIF8SKmD1LI2QpSbWvhxsIHvTfA%2FXkh2CwO1W7Zhtgl%2FvAiAsJNG2VD2gfszdyutl9x2ivZM363n4lib%2FnZ3uTC%2FUAiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOE63enykr3mMbSYnKtwD%2FwcVIhS2qIhZSyelVbjOZ%2BU3yMmSZa6wy5UQY9phDOgbhhum1oNo%2FHkLe6P9CYlEFiit7fijTVeSEPpCEhRqicPU4dtCZqvcg5I28bUOGtUac91tRYGh2cZ3HhfvkOzXgVfrAz8euZoxiQgZWSafTu79QpaeDDWQD%2FdIqnRhWd8%2FWmd%2B1mesfLjfizU1hessBjxB88CP0%2F0onou6AIlhnLpE8ozO4ScbYrGBW2j0p8vTKLxUlPxkKbtIis2xUYcI4zILFMhcMdq5%2BwjSup%2B2oAjx2PFVujehlj10cJps%2B0fxMFgg4j2Pr08WI7ATHBMgZoOg7m01z4k0sc4nRqgtJCqvAP%2B6UwSEasjyB9tLRyKwhQJ5D3kobC%2BwVlv0dQdI851iNWTqITOhr7ECgjwPvwSvb%2BWnYmeC7R6n67bc%2F1X8SF2wJo91p37YEHeu6j23ruXS8eFV8cZsnEh4K95CybIvr7uG%2BklkOIzwP1970JnFbfK%2BtSSZWpaT0NBcP0qgX%2B9TnWbFnynF%2BsLMGLs4F1uvirGHzGc4Y3fVEwHUfPzg6klfCezEvYa9Srwace8iuifd%2B3oV%2FsDtbgs%2FyHyrqtTuNjtk3UODVpA9pileiVxoLPmQZRO7zyYnbm8wob7hxgY6pgFRgbdh0IZmdwrgnOIkertmdW2PY0xyN6OHLu3FGj3sJauzdy6Xma2ftnGzZQhKfHUcu1GCAQ4Uk%2FEzIJQRpfAIfBw1QNSBc5rwsPLw%2BsqkwHxYR8qyxbIyGgk3nIyv7X8KvtPO3K2k7kmLvMkbt%2BSUfDgz3KlNsSe1%2FI%2FVY8K66XrXVTYfoxop2AVgAUfS%2BH0ZF36rRwl%2FEfZDOnveFyM3ror20DrX&X-Amz-Signature=a5b0dc4cb83af9b951c0a07125546f9bb5e275665df88e31ae7a40771b299e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
