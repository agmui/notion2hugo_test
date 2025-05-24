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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV4N6K%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICn1zHW2BUTG9sV%2FS4WaomuJDOYsgEAZiuID%2FW4o5h%2BhAiEAl5eb85SXd6DpWdvO4aJrw3fKtkta4oaiSpr0vGsSrNAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIY3j02EYiw23QML3yrcA8HTULFh%2FEtiKxfdqvMAEkcZ7dwnFNSjS%2FUjYiHN5zVxiw%2FI8ngAEn8J4cU0xbqfrrRefXcPeGnAhszO29Rga%2BhPjd6jGYr1ottLtUr%2Bls9b%2F4%2Fr43xZZ0F1FPfi7HTsIMe3r%2Bq0IVB6oWwBz4bI1gN06d%2FOgYT5dEASEMZkRoDPaGZNAPSivDuBBcL1%2Bt4AhGMRtkRjCPnwFhltH7qEftJeZRT8xCy79W9lHMGDtUQhzXlTdYVU1n8nvfp89smzRUzmmn92NktsVVZztP7aF6XopxYtr1WCEP6LpCA0iGIGLZeL7uIJLZaFXkbXFReT3tnTYFzFHi%2FpAeVBdtmgdviCIccGGqUaOH0ZmASEKXscB3dTuI2sZvayhwncPcA8fsbxqXO%2Bj2aTcvdq1zV9JQyFan1SLIvzCP%2Fe2iVA1EN9T6RIH8Suyv%2FoIbJro5Yz9Ascshs%2BNUnn57Fu9nnz7GrpqTZTVuTCFLgTnIM2AoEGS1YJPD%2BvGkyLhyt%2FoyLKnboOT3upb3yS1iFtCE8RmFT6zrxtAdlPo4Dy3hIYfu6rFnv4wpeJ%2FL3I8ZTYdpIFQ7HGQbwQoz%2B2sQRuxCngGxaOLpfCLv0rDJHGf1E8zipGV%2B6ft23F5Qsv85umMNiIxsEGOqUB8O4C1QIwAEm%2BrH4Qsv4ASpspaBZ9L8sXBc9yg18Au8NLGyo0nRGaJdMvK25LE9K9unPJZJ9InzEEmpiGuG%2BFXkURtRkOVZuevdm6O61odQhEcke3sfSFS%2FDpO8MT3CRXm5ej4Bd4GzkmMDGnzCy%2Fq%2FYfaeWnusTyuTjAmef%2B5KKLOHJV0zhkYrgJBPlHcQhcLrxofQ%2FcJKKZNG4z8itm%2BWzirVOV&X-Amz-Signature=225b8360526364fbec7ece3172539c50d7e76beff88ca7d8b10b3d81ddb9027f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
