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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5PLIVT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICcEBT7O8WvacFAnrA%2BqKoo1IhyvQJQ1zn%2Bm1J65Ih5oAiEAiXqYmrnBG93qGtmJAQg3R8I4n0Ew6Ho8Omt7dN1PvmoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI1KzZRzs7kBiYafCrcA5WU0N6tJmynEaBiZjrYmJPvRWU4Cv%2BsVYzFM0xm0IPS%2Fnd7fuqotm3G%2FyLMMvZu6%2BIDp2MEIim1K2qcNEfzXqvQgCi5lXm%2FtGqNAYHyaM0cUC7RPNr2%2FOgIhXTF8NxBJZ99tnoN7mhqrBJNATk3AZo7MgGfnwoXTKZfAwcyCuXJWVt7vwztR1FqlveJhzJ5vZIpx8bg%2BZWu%2B%2FvfxvjQl7gnF566kvx0vonodT11%2Bt5sels39r%2ByMHesQNi6cO7rrgxQUyACSMmYz7KxhI6zM8PXuHMxGRCj7T5yhMzejHOiHkLvLLUuX2gzlEGwbdgi6edOb06qAkuC9hZ6NV08TqCHW4V96s4V%2FImAFdCUy8%2FXJjdlbbPs73fZthcmuiz1PRfuWO%2FnKdbGCKEMYZfArPvV3fuGqeeqEVxfPrRmkPnWrRhLcDcDufVkWBRgGXiJejXNJNQFIhN2peUfK83FmmxpYiIBfn9smHyZ7hccCrU2v8wb8GWePphbE7H%2FD5W6ZNaez69INYXMadhUOBN2%2Br7S0khbUyZZbx%2Fk0bUzFT0hrkOSJx0AxFlawgP8z%2FsfWWdF2TV59quqjBTfDYBzFmKb6%2FOoG2OFCY3P3%2FNF%2BoczB2x0cz%2BZ52GYBjdOMPTr%2Bb4GOqUBxRHDRuCFsitrY6HArUd1eXL1Smdsbg0fyYKT9xSyMa4SpHLL2nmBSTQIZ0zCXWvK%2BqzQvZg3LnaFXXXN4M%2FN8khTB%2FXkBOwJPoWP%2FUNSCoQiHBCBllMcP065fW3aRjz04A%2BguG7eRzB51%2Bh78N847vToRpDqmY0AguvOFfcHPskINgzu3SGw8B8dYcNeHf8XuJBYh%2FEmr5LVHHibDbo%2BYvjk1VFu&X-Amz-Signature=f3624d8cd590bb7c48317ca75d376b09fcaa313efea433eee1d8945d62b1ef37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
