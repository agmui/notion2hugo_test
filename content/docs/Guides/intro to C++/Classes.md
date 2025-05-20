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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TFMGFXL%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFShI8t1o2IgnDSRgFCmBcGnPu0P%2FvvpzUJyXY2i473rAiEArn87mdI89N9HvT%2FFuGzUYM8EjJRED40xS8bSYgWhFzQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuL%2F7aAltx0sTRwACrcA21j6PzbHS9Ctc7K4OaZbluLBlAIlg%2FAMXo6gatMfIceQAFn7RD8ijVlkLK8IIil%2BPA1yiIdpi66IW7Ti1iZWJmNP3ailqx6PZxe%2FYm01s7jkPGP3XKcX4mxtcny4lMcdnL2GNhfb26janP4ecSZCpdnfIs5YdvitoRTM9%2BCo%2BTLmdGaEu6ClSihsc3%2Fndpm0t5Rs44GtjQ%2FwvsKdZ65MWAxuBk2j69cr%2B2zHSTebvyu7pbT08DZSJugrehj2IEmKN3LQZyzLqs4hWWDnVrdDACRBkeueVeZLmTD4ibvmMRYo4%2BOlJgJqTMFbmCuGt%2BwsoitPz6L%2F9H3OLjo5Sk%2FSvDl9fNIIvD3gU%2B5LpR2uDlCpZSojD%2BxoFKN5kfjqcvhAbBFe9g5fRseHV9MJ8jl%2FEFptI7975Jlkpdt7FHCI6AckEPgrMtcQjTIeNID3odJ5f%2F3meNPy4gT7wjfufnR1miHg0pKIOeVO2kn1BuzsWqoSEqjxOwdQp91LXXOtCP8b9HLCn0Dcccz638pke7AV118n4d8Uz840e99Nyc4VhWlkeSpT9yClZQHhBsMZpKr8Ed87ULF1%2BS2L5WV44HeXUREsKbyOcK%2FTFyzoqfOZnZPU%2BvJ3gr%2FqPsTSBbmMLrLs8EGOqUBBGiFu00WCZGOEo7SVi09ki0LqwcoQhxgRe8FHGWfhaXaXJlDCGKreVLefrhTKbvbMOKn6SjiAdzEgiu%2Fpt9KZZtxQ%2FaQkJYKMvOKEFB9otdoUKhhFilWsxFOiuCln5OZ%2Bpi6RcZihXa2rzD8RNnr33vHDr336q7xgfyekXnqSaWnBzxroBmkUqXqrW870qXgTJpb4IDP2Uad4GEZCzyijWtPRPt5&X-Amz-Signature=c87c3e98654b8517b93369cb827fa122ed3b58a84694cffabd2657f72e20c645&X-Amz-SignedHeaders=host&x-id=GetObject)

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
