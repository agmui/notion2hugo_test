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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2SDZHIG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD2DodtZpWhZb8NFzNa3x0ia6Ux839xQ0fIxpKajaSegQIgXRd9958UbF7d7tu0nL5P4sbOuZ3bFk6pqNvTYzZhXFUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf74IPbUjc8e8K9GyrcA%2BqM%2Fx7CRNEREWOKp41PEMno58xiPQrvzA91XCoXKCLxRNFyNA%2FhXXqUP%2Bph8R9IaDDBkYHNN1ymGgVUFnhKtxmMqNH1ccdpVDdzT7P%2FvT7aRUACze2qKZ2UwQHcM76j%2BmpO2a7q7xrUJuMd4vX59Hq3EuaBPa5314Al5xzbMYqbhGSGUousqlFPEVy47lbRmI3QTteXR1vDIssSCJxHpJoJSBVzfkUhf%2FnzSRFEODgweOrkHIsXAS8H8HWuxyKMc%2F9H%2FkIlddTms1amz5qB4JN5OWKHxB0Rn8sQaH8J4nkdbvCtWnTdJeDCd4OOWWURGUBamOZDd5k0xLCDWI9L%2FVikM5RgT1Qp%2BVXv2Zcyv67kFmYym7LqGj05hBI4LRflfy%2FqEP%2BYDkusGTRPV%2FL4MZOJxIzXvVUGcblMB96GUv2plrOXHb6FPlM0KFcgd0pe5xpFBaclERTD71grqRQHi7GfkrNPIlAv17NA4afMLTFj3oI9vT1vqkMLp7CKl4Vqe%2BvxHs9D3jLZ3AZLe2uVTGdm4w7uq%2BArL13x5anM481Pxmjm0IKL2fpjvIpSJjDCg07UEjgFA5ne0yLffre1YafvnVWoEctOvGJPToS5dktpZ5JtzylbnGurWIidML%2FXwsEGOqUBo%2B9y%2BVcvfLepwGGQpNjQD3ObDaNwpBkxBKypqFLTYnXbGNl39VMiTIOQiqXzMXQhYs6JtBKFmHpNT5qG9kmmQ6dQrrV4Y3u0iUAEvIyCF4jNe1D9HJsQ6xOvxvc8V3n%2B75BgKYX0QsOR4wqSFLNA%2FQCYuIq1yaLssIx1kBahvnZRltY8QntMV367eMWcx4k1DRLVbNgvZ0CLSqZx2bqY20RjT2W5&X-Amz-Signature=071bb4f9f5d2673a62e66b7400511765eb6fddfbbaaf9c4e5cb743c5ee9ec66a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
