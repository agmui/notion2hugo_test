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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NBMD42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgH%2BeY2eFxcitidYYP6tZ8uX0BlvJ598O6UaKAvIHQ4gIhAKkL7AmkvwZxT%2B96NpmE6uiBO6eD3VENn2AdcNiltpP3KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwureH%2BQBk50uYlLc0q3APDjIrQWkvdrQjzbS79IG2MIA4fk0pvQhAuYJ%2B89vXz9UPV%2FetnnShCV6v8ddo3dVTGbfakDNKVblAhGdtIBhht9gkEF4pw1rGROhZNZjfrbgJH8XBYsEqLuWxV5ZxHsLNAVJjDZlyCz1g8Z1gxkr3B9cr%2BB3sYZYVRQOdkzNVZrnMv3466%2FKxwLeT%2FzpYoXWvg0P8fDlFL6zzKweaKgHCt7tc66Dp8uiyUnxDBcF2x4VE1PLvXWizDiEDGwi7gllAoMf30iKpbQL3wtor%2BerH82K2RY0oianQ8us4CkctPy5z7FT9meCJVkzis6wqWO0rq566FqUQfpsVwOAA2UuczFY0SDvTQDgDSWN4j%2BlgXeYxQWz3qrAUvoGpNxzJyOCQygXV0pNetQHDQLE%2FXKawW8J2BODB08%2F%2FRO5gDTxocFvE0wnJNEvHCAhorYZ8MGjTX4e7GdGw50lWfEh2eQ2JYW%2Ffx%2Fd6XgVucsw08iP84WMnbEitWw8jpzgt0yPQ07jqCr%2F6vw%2BhEJnaHBqF07rXGjzPkc4mst5X%2Bx6rs6jq0x57EKFKF2P%2FNFjqMflJVKXQutuHPjqFgBF30IUcQSwcYbwPY5LUMgCbmxlwRkR2SEOlvU3Nf1dQiCvvIzTC7%2FYW%2FBjqkAXPbF28Z6OGDCx3drT2DWz5a0%2BA9nmg3qh7V1OF7ZMIdx%2F0BRYL7jmK6cDMeP35UZiQKD67XI6iesGdQagXQ%2FdCafumpddbgrpfglIPM0Xq5eB480fyNVf9%2BATtvenTfUUyP%2BqZchnnKT5YItgl955%2BsNEtmwIrsNatyLMz9gafPqaviq%2BywdxnwGeK%2B7B0JxJaS%2Fw%2Bv%2BdkeFkXj0ZeVc2caWsoi&X-Amz-Signature=8d58c95b96cc05d1cf3d68e5b4a3ce80908a792dfbce1f8015e1c7ed30b48eca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
