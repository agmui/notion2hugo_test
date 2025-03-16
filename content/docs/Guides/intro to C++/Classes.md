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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGK4XHYP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFfwmZitZvpeFv7hpW2x6HTViAAG5fioY92VkQ5Y8LEwIhANdqCDIPukj8Ml8wj3R2lh9mDvp4oMnM83aHMfwX%2B40eKv8DCCYQABoMNjM3NDIzMTgzODA1IgztLQ%2FXMx%2BrOv8JqNAq3ANIrJ8AWbkjocG9ZaFwp4m9WPEEZIvr7Vq2%2FqWgEecHqlLa4fiXy8iLD4rBKmeRC4W064M%2Ft9u5P55KqvJo0ZJFoRz6p2PvASSBIcKlIl6pEOdpDBPam2QNs8Nh%2BqJNLDC60qIGrwcDHvST9toqh5%2FHbqVTrw0bsRHUP50o9cMw4evPDLT7QQeqQ%2BbZQ4x30K74mfysvrdH3W1slFVIaLZaIjjYCbs29AGARy1atObvh6S9T0Hb75w3YGe12TqaB8i92DEsbLFG5Yn0zKeRltpOxceefQiCY%2BUflqMeoaBTrQ8PLr1y4IlgLZXiob%2Bon2Z4w4ePqEPLh7u0YFFxcdO%2FtHqM%2FVEI55nQsBMSlx3EAqH2j%2FgzAJ88NPI%2F4fjpIB46apYKkN8%2B2gjgh5SSk8TIW3t9xeb9Nnqy0OSfFAYUOxxjYtPsadCT7kR9x%2FZOI3sEXUQ7F0MA2iDEt8JT%2BqNNpw%2FFiCBAU2izYR1935A7kjvop6RM2Egu4is7zO0VrdaxPxy%2BnNnBlU3EpuRSeaMkkyMMoYzQOTjHL13qyGwqsrF%2FSFZzNlz6kCSzXu12kw%2BhZcka8TQYwRG4xY1l%2BawB%2FkQBXgYWgihroQeg2D7Znlf1Q3%2BsA4otHtZDRDDJqNm%2BBjqkAb%2FSYdFgGbrU1yggj4FUcnV8uaiGLEErfiXLfEQe2kOO6w7kWIY18T03CMNTCXUN4kYvcfQHhVKEavGWfgsL2PKf8NrbKnu2lho1elnwFpKqTFhFqBN1LHQrZ1UTZzob20u2vvuN0z4aP6g0Y0bmUxoTQ4Tz3V3O3wWCcLgsY0i1iNUe17iPVH%2BrAoiyuDLmvpYZ2nCMv%2F5ADzBwBi%2BO0B7fy9Rr&X-Amz-Signature=1b92b0a0708ffa0ce270f8351c82eaea34436fb2b13fc5bda7dbe2ff95b726ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
