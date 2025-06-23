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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EVVXRC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGV990BCxEVteoAOZQnUxxIXuRxPwr8AkkbH3BEsI2SIAiEAgZ6nvGtjDolCDUuLe%2BrDELIk0JTPoYjOasW7apwmiS0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLyBSpNoxyUZaKn5yrcA0G%2B3VeTG8i7NTEcbEGrVqMhoc9wbsRUXR%2FY6uelkbr0bd5NYykOdoBih88hXA9opU4l%2FATdV79rFGGuDdsEix98DKC6AiwzHC%2BRfLP3OKD3MzLmeJS4YlOhMZYQzTzK6hq%2BFOUh3VpaJpTpcapw863x1TyOGcY0RwclnEE1k4D5ZPK4yuHv4jFdiL%2B45Z3EPP9F6AK67uQVYR4HG0COcQIz5v%2FIHobPLQJ6lU02mwmguFtBCS0k25qvkgWYmwnF6%2B8sSSnHlQgu1lehWjFYRTF7ILuzoA3dacbSZvrHxNMZjTStee06hLAoX9eqR1XwFg4f7%2BdfAA%2BKHLX5s3jKhsktsq3QTkcAISNsJ%2FlodxbdMCjvf%2FMDkmnFUhHjw7w7AzHTzw7CPtgr9QWC1J7y9hkVw%2BbVKp1JXqCbejwsYtRox2bSqVHGiKc2fgUEKl5QBGTtzoKWOPV%2FIt9%2FGlEtDvbLP8lHWKrkEXsBl2LlxPG7xVofjsZijDygUIitRU0OEt3evEM3efYWJpd8O%2Ft12U9k6Ntu2M6UP%2FyMpxN77GYIDE9HgQMSrqrZJygBH7W6Sb1Y4J6zHWomBWktBqmEzjOtJ2z38NYsL4iXgg6ICTq5u1ATxLJPoURvDGYUMKen4sIGOqUB0Zzn1Uh2gsiwio5wC2tv6sQ0ZBV0X5%2Fkl7pj%2BOQH7SkugRtkGi1vqtxLUJOEjSwstTjuMDHSfdE%2BN4cpdNlXJmUqZwHIgHu6X8ova%2BQQzXPdQQUz%2FwpGfK9UAqp%2BqvTr0AYF4sLtDRZAwxzLEeYIQDQvu6g%2FtUFbfQAmah5deFZp4JoCsd6IvAhCVEo1ofdGmyctTk2Kvo3UqcHWU1PDExxA2MUU&X-Amz-Signature=7b531442d16ca001f40b0987edd46f839178713937af9ef7a910dc90615ecc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
