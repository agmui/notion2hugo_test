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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VASJTZYC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCagwMzldor20lRDcnioNVLFdco0IXHoo1qkwpPCZqh1AIhAOSWoJ%2FZLrkpuZJmB1WRtUZgNg6YnQkPAtIGVCbzLvDHKv8DCE8QABoMNjM3NDIzMTgzODA1IgwJIi9af0cyBAHiz%2Bwq3AP9lufc8vNwhbGh1jxa3274BSW5CiqVQXwikeNeZ1%2F70c5jtdWqFPcAGDy3PSXxwKZxs2lswZG36hv1SWEAiTNnw3I7Ynuqwt2rWEFTcDHBDSnf3lGkF%2B9Oe1NE0B26VcLvEaCVM5KCnFk%2BgBf%2BYvdBf39h%2FyZ9FkldUGSi2T%2BiEwJAxu5piAgpn5Z2H4m4y7D%2BE5OAz43%2F0XBGbx43KY1O4oTYp%2BE49vZUezV%2BQkdYrqdxJo88IJdqPCuD%2FFbI3FbQJvxMXq1X3bJCEKY8aFDB8lzNg5fP9l84MkE53XgR%2BtgGVakhlwx0feJD5%2B%2BRHRlZxKN7PuAoaQ3wAbxJoRU8yDWGHYtf32ZBEtbRdUqQpEHT53HmhNigKj9IYj2x9IxXaGM0I509dBY8brbTEKWJaEna6otiz4Yj3xkFDnExT%2B%2BkE%2B%2FeBKojR4NXlcyjcZt9VjXYzKSLlzizWs624B3g56SgwN6jWSZ6%2Bl0OwtxE3EbCS142Y5bvaYcx%2BPJZ5L2hjR8UM4Bidi8ES8quEny9R7j%2BLeWGpbCIzsjLyTqK4y2ZCSCnz%2BBeSImVEFic4sEis6C25G8%2BcK%2BK9rJRVNymcCcytdgQb96J6oy1nvmmrifYKfw8eqkUyBoT2zDclerABjqkAdPtV5tZDny9Rhwn9LuwVOg5oM20EX0GFhQP8hJAEx7B3Dt45u752V6ynoDU2%2FolxEHSxBakCfRA%2BZAdxtHk8GAdauCzjPiUA7UeognDMfPGubhvKF7cz1HK%2FEAUHWpO4KBhcV71NTRPh7058%2BoQZJzCTDtJmjtmWqQDMFnBn8gwLCVLmd7%2FlXlUWzvWM1KricDnjWT61PgeVlsKedAXwg%2FEHab2&X-Amz-Signature=3bf630f9dab2640aa2900c936799dfb978ea87a1e97ff5e0275c78f271f8baff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
