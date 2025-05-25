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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWCIOZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIF8G6VxmdoPySo6uiPbOf0zXho6RCRXGLUIq02duUEqZAiBZ3u%2FC8jkLwtfVgfoVlm0WLZ51JpHEsfQi4nN2qzHl8yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMQvHFzv563niHDFSRKtwDTDnCjeBWG9bdKnqdoHuAUTLelSXzl68v2G11PgQEjh6SMm%2Fs9Iq4NRMCdAev7nkT1Vy8eOIbwPctDWHjGAaXoiDb7Z0gQHsqwb5OGwYvfA3hVbfExBhR2FCP4UBv0dQ2eovLttSX7NZhRUuDkphhlYPHJq7y89umqfsJ%2FEcVi%2FT7A%2FFSMFnzZcI0FfsUn%2B4a4D%2F3iuC3nnitHHtFyzwcr859ZzVJhA7zsWQ3nrDLyObn6qnsGJfTudaVPfNt9ABip2eM6jjBL6ZxCF3L%2BWAsuwWrxhWeUf8tT56eC4B69uq%2ByJLvwcj83b5itd8IykcTAiIr5E%2BWBAkoUzDBSRzG8CU1Yj1k0%2Fy4t5NkXds%2FXFZFUynKdCJ4BeJV1fS1GSFgGbLMdbu%2F%2BfffqwYfVGw2FI1sFLVXCx6zX84NsnX66QQr9OqJvzUatCFS6we4MB5oqthX7EsKDT95pOAcD6aP4Nq8Kuy2iJRmni%2FkK%2FUxynKUl%2Fjx8CRlHohVW%2FwWPHcrhjOYdsjF37VW3%2FOcA1lmgtdlz6vLX6nvkc0j%2BEfM53Y3uGSm0Kfxv%2Fryp99DaPQqQ%2BHDCE5rnh4dqyt9BtgAzHVPg4z7gbhU6m%2Fh6Trn2Et0QGzFsRttB%2F5oBSswrf%2FMwQY6pgGeipYRDSzBwB15bvk7TVai7lr%2BuyBS%2B%2BgP%2BLsRS10eqr2EwXpJpd7rrTaqMRdrSew5duCzmnaVDFMDx%2B6%2Bd0Bl82RCGMK6Lf5YsFn6yYIoY0dkG4e%2B2F8pcjZERcNRNt6LixzMiSdpKTEQJTHOIBIQ8%2Fh%2BkzXb5G5tbWTOme3OrBJDyl6wH%2Bmyp%2FCpKov70yJ3nlUVhyVvO%2B40qU3p9RuBbhLwbVwt&X-Amz-Signature=6dffc34a25aab7c7f4ccf96ff999933ccf18586ea63ba180203737c5ad069c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
