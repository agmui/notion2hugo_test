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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=c0b97fd63d5fd3d395378710b0921c749ce1e918a6c6edaf73b0b894b338e3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
