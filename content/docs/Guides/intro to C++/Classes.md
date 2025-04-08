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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EK3WKWZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfXpIj3VawaarQQv286Kg4cfNGRjon2dm4%2F%2FHvn%2Fl9ogIgW2c2cl3In0yglZOUaL9fFD%2FsVd52WZTXbsFsSdSb9kAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGBPKTBFc%2BIY3yPZVircA2XXZZNxd%2FOXLwy8TRHCtXNGnjhkKhXADEQEy%2FbaLxqr%2B76FIsoJ08%2FK9pmvO3jdI2kJdzHZL6uZocWadSCWhT60NVPWHWyrOn7P%2BIG6GkIdi3BBzgSJ6fl0ZiMDkslozZsblCpdO89p5vE4nyhwxWfAPiVG%2ButE6R15wiMRITUWoWuaIfNeHhNb6Ux4b13YS4GhnIZlfWh8Oj11n6ijcp%2FpmW%2BgT6uy%2B6SOv7ItvJkUKYuiG%2F4zcuUq%2F3ltNOOeQ9%2BeVZ8LxS08IHDXioX0Rm%2FgWXqsNeNH3FvewSKwUc2yAtYCbItwmS5BKFxFG4tprtla4jgWQLNbODYzXhqOe1UOp5ib%2BgRFjKIObjEC3mhzpWUVFMyhqL6cr0GspayvYM8qiHw698iEf9MwEDHYrDI9Y3ZlXQrKlQ8BtMFpIXKs1gmwCp8M%2FgpQstlSiTaIDpLWJGShUNJaJ84vZb14xQqEaemnT%2FF%2FtXYFhw6GOWnEwvI5qdSrq65am0KnvqZERqGNQnnw30QRPr3Ql7LFdcJbkawO7jaCpoOIY6%2BiUisj0RYl8Av6MM4K6viduGHYT%2FX4FDlyD8SsUtdFqCrauXrEUPejEgt2vIAWH9jU%2B6FBWK1sYK%2BL5U3hvE8CMJrt0r8GOqUBXlIzg7cJWtUwhnzndfUyrrKKb%2BLDAe%2BRns4Bt%2FkQWDel9cJ1rp3sVniAuaBqWhuWTdnicgoK4Mv9fh34jQ2wORmKQZ%2BrrC3lT8%2BuZwS%2BD5TKfx%2B0DUJ9t9axAmE1mF8LdEEF0UgAgTkOrPIYviuB7C5edaR%2Fa1OCgNCDFOQ3M5MFkwVwCA2gJuRXF4Iyn4yJnQOu2D19Cai4%2BtWTajBqQtKiEGup&X-Amz-Signature=1c461f3ccf53f127bf5ee2ed90b80a1fef1b005b02992dce7bf792bb1fdaa119&X-Amz-SignedHeaders=host&x-id=GetObject)

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
