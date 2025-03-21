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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFS6V3CV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCOF5wQi3pvfcgYgTPqjA%2FdDKxncQOjy56SYWtPD9SEfgIhAIU9q630mNOYFVqvLaTVPsc7HwX0of4HdcY5T5VMTG3nKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmre6gXRdmnIKnkxkq3AOMjBA0ft88KECorcdAQtcdl6K9o8xGyYcmkH%2BFxarOdWvAJ9DTYC6Ea%2FsO597Myn%2B%2BQg9uovrb7qJ6udoisNOH2LkfFs7bj%2BQstbfwoigUSQ0M%2FP9mkf97ZxEOPgL7qgwYvsuoOfQoHRI5p6LvtWLhsQVwG5NAyWalSDe%2Fkr8IyRCEBJejTXyYVtduEgEOM48nNXE4J4qj0Nu%2BoZkcob6nvn8dI2D3vFiB%2BoruuZaJ9CroBVn76ZGLYupsugWI%2BpST9bSg2zjL1O7fjRIt0q509O9W5VQrB%2BDKLjyuiqCOWYrFkAhq1syE10V%2Bp%2BARKtTul%2BVj7l5CQ80Mgxe%2BxaOHC%2BlAncZ16LM4yv%2Fa6wayD%2FixvzxrhivLM7xENocR5wQ%2FLdOodIZZZoSEmcM13pa%2B2%2FBBIeqQWSIZRFAo2sL4mLkKaNsACahHhDn07iWwocnJxg0ngk%2Brxj8qIYMrL2LYBvLcou%2BacjsdvyipUsU1CwRFNUEySZ3FWADY76EAVyE%2B1ClVhocT24OP6IchhXcCvkenye6IxhLIc%2FxZjXK8ssVlGb74U2T1Xk5Esk5rkODlt2blk7U7XM4DtuGmIigUJgytpQHqxwyLORyS%2FvHZJJ4as4T7BSpVBG3D5DCFmPO%2BBjqkAewkOolGllUnVoYGuI2X1ifW3BDNk85XZQs4ClebZplQtFK3qVb%2BjbL%2BkAbU9%2Bvz0AFYZeWDYKYBiP4uK6HhNElwor344wMzAbFTp0pYbz7iqq9CKun6F6l2PCyQvgMJ9x7F3rsRjKiD5dQfRk4%2BthZYstI5z4j3sdZRtoSxVcopcTZS%2BmC17RhAaNL0WTCZuXvlUqciUXVdUA2K2fj5C5GAZHJU&X-Amz-Signature=c63d0b50e4687d5f15458dc4cfcbcd3a0d95fedca4c9d4997c4b46cec2715762&X-Amz-SignedHeaders=host&x-id=GetObject)

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
