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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LIZTEAD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpKw8tI4PxQZ5Afv2hJuGCX5B3rQAzK9re5KiAb%2F%2BTvAiASjOUUF0UVtaPEP53IlKJSaoWhWbir3zanILNEpVbZ1Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMrMXHmodPJRZ20AfXKtwDuG2AtgISk%2FokvBLYfPYZBfw6miz3dUDGGIO8cvUvEHBujDXTUaC%2FPjf3HoHi0YOh539E1MsA4AkSL%2FPYil2xQ1u%2Bmgdomv6FjQD4TAZ31NASt%2BQSmHRrqM0uSwNM0GUCkm9vvHnrtR03kYzxoK5PoN5OFXr2apodIOkPJQFUm6DTYwb7AAjVti97QrP08O8XqvaE08HKK1XYw%2FdV8guhVGxYWx%2BYFjakFiTpFNtQRrK7GRhA7nCac4cW75WEKQ%2BcWD%2FMiJpisBDIGt7rP03Hvi9zkexxCdAbV31Ua7xps2QouVhfY4OG15kfYeFLCVmJ5eY0tedD62Rgg0PXednmxsKg5K20UmJd%2BO9msqKeYS5mtdfb%2FMou93s3l47FCs0%2BuUyhvSgYewqWKWKe8X5uWyPSYuVVC3BqJnf7%2FaiB1bTUFjwriaLG6sTFdqIRzlYFf03RUeVXNovNEcPHSbNfR3iPVx9Av69kzaXpF%2FPfu0U7RIW5ynvjjXJX%2BIozBSvitzBVvln4Wg6t%2FpIJBybx8j7aZUYJ3M%2Fk7k21DIm0FS0Z2qAPLBcJfeM7F5GFDnKU%2B8RlMKwNIqwoWRoMwmbBjznYGMm%2F8tR8xSE8ndga0W2xyCsPLEXjYPLfi8Ew157xxAY6pgFg0Zyy19PCdflpoSif8qiF%2FXmYU4kmyGa2188P7My%2F7e8Ica8JaiJDLRPtoLL8hE6JwuWmEYeoq39mj1WwBCaS0tXLuIqLtYIjTy2pUpBDgqWzH3ceGmZFytG6i3C7DTK6wL0HFlMIpPsRiO%2BLCbxKJvU%2BmPlCyZyWzU1%2Ba5BDSIN%2FpP6NhMmQ4Kk9m64C1elpO2H%2FVjybBnF5zxVb4%2BCwQnxYMTZ4&X-Amz-Signature=55d4b90ca6aeaaf3725745785fcb232ee6f360072ff91443784161a10af0a6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
