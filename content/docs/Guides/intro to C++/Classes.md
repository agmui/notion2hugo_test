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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MPWV3XI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC3yq64xQVfsAsU80TOo6%2FEk4pY%2BE17ECE8Aaj%2BCBlflwIhANFSnxQBHHo9P5XQ%2FQDNjurhKqGqj84Wioaa0HP7fx0BKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIEsKnCI6vFc4MrtEq3AOEEc3b3glVExN%2F5RFPfWrq7VKV8j2CHtC9aQZi0czAj%2F34qc40V1CH%2BKnLD7jqMCOH1MJ9smVSwaj53nLFe0k3aECOl7Xutm9OdkPgJG11NRnfTLlID2kFJTJ77e611MTlDzx6Hofb185HxnhXAfPHiFot8M9Oljvq%2F3vUlqjEM52bcMs%2BjKp2q1ZeUUjZzc2iWMw5bQYg9o1wMTcj%2BekXq2IlT644Jn16KbbASqdWrpPQsKhIFzfKvEt02mpb%2B54AJwAhnpUCVMoSNIVIXevcHCh34xENEDaOH7ebcct3nA1SczC1%2FB1kdZLwxfk%2BdFCBPBHYgZufXJdTNEBnbt0yZHdRn2Z7OHUclqHywZxIOTQKa23Zvlaw4BQDuebqc4shL62LNDMzm%2FcZyMA3ohzyP9HgdWIecaM97sL3U86fdRXmCHiFpRZ2ObrCIlUJveKTRV2zNvGxuHSfRKvq%2BxjVqqmy%2Bcu%2F9EOSvlGSi9BsVp%2FDexO0hspWyxiwC0R1za%2FOYDZiUIW%2Fq1pPp670S99OKVVWHT44OkLoGPt03lhq8au%2BE6%2Fgj7e259GXLZDMTzvo1WYhCzw%2Fg%2FHreUbyB0bg6enuumxSmPhk9a1mSstQGoEI62YWnNXHBXXPkDC%2FuKu%2FBjqkATUqc%2F3YPfGZY0kkW0gdo7IfE%2BAjZfdXUqzI9UHiMGaGZUsWEJAAyOs77kKwtZiTVF%2Bj6aTpkPggZmo0ZbZ%2B0Ckr%2FgmsiGuSn4bcDSP5RwNzSCYRf8qS97HhBdHPoK2hayJoWsmWxGzO3AhAOuYX6HQ9JL9RTXPXsYUhsU0r90SQpCnjDuTFK9mcS1LzeBCtPnw6Cv6X%2FmukHRivccaEEKhz4PkP&X-Amz-Signature=e9301438221b155e5ae751c09a593c7da4d6038c247dd4c2ce31dacbdebddf1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
