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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJP7YQE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCLhmcFW6ooeIJ9txaTaeNCON%2FMAiDEU1q2RruSbO2T9wIgajvN4bJIOGQA6Q9K%2FVNTfylIOqKexlgvhKWjv4A3Xdsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJyfm%2FzXErxPHieG7ircA7N1ccdW6ty%2BxM2HwiUeRDTMwX5T7UqCEyjvnYe4%2BV3LiLkoKBGOZBJOBAZ4SwSgJ5VvAOqH4E8AmselkLPM51TJbppxzftlIBKU8SVpFy9YSsXlsmKQNSByxLxrp9mwrFG6E2Nb8Un3AfxCerG4h%2B4QiuD7ooqsmMdrXBiuRd86mAOxzXfO%2BspnnrhSR%2BWm5ycwISDDu5oezTsPBN4uNAGXy%2BtTWltX38PzkRzhjve%2F6TmuhiTj2UpYepGC2eEByp4Iy4TYHVJCrwxTe9gUE6iHx%2BstmOM%2BBmWAQF6sFvf3lJ01arxeZuVUqvnyYphcccelKIPd%2Bjex11vevmv4cqgbNyzuHJzpgDL7OWdzlpit%2B4WIt0uELcAPLNOtDSi2CmtgzZUCr3yvyB3O2%2Bu53gbu5kiM9c6VSNJxESGTQPncOdrhtVi8OVSOBRYssESA7LzUThXxAK%2BZm%2FILRvkzMvgKoYyjTvJP3J77sOBQa3tRYhhOPuFMlwe1dfN2kewxsN31HjbQ4UzHh2BryXDrx4dLnqb2Keudq5%2FR7geKuVsX1W8MUw6Tv46aB%2F%2Bnz07ZSo8RlqkLtc%2B8Dsr34QFZb%2B7uPUiaEHp91tgzpHF4cQi7GzjKlcLKpAD%2Bj0gQMLSCjr0GOqUB2RxJeaEZNirZ6Qa6LJ0WyFknjFQotwXjAfk34r%2BovWzApTqgFT7ffgu10tQOYa6cAUxcPBABd0pju3MBXPZx%2Bs4miwLPihuX0lgRXLdmC1tnAODqAZGyWx0NWo7PCtzJkjJJ71ybO7WOqqER%2FL5uTVewPNiHiu5i2p9Ko33lkqVP9FjvLbs3XphPt5ksQPI%2FHxwm%2FwRiLfsV0jkzijfWvaqE4SUa&X-Amz-Signature=13e7b55ad7391c824499cf3568f88d68fbbb381e1ce15b3b0cc3838a72e207c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
