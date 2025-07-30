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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU27G5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGmFAmC9XW1CaTb9YtJQnyEyanc2nCgVN2%2FW8DuPbPgwIgefH7JiAy3iuVXjp3qGA6eADJcu%2FU9EtE3FW8OElqZoIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwWvHhwbsgepYEj9CrcA7Psqjc0m8r2cJ6vJlAUhsGa5YSxAC%2BSidE1DNPAUx2NUahwH18G0Nm%2F%2FM9grFZ3lmR4XzUP8GkfaP27FLlcS8g38tikcwAJACNGs1W%2BgKBbidc3GpFUtK50%2B%2FKQ9SghIVwPbEg2DXKXayYjz7zgNS6hjdoDTJGlhmKUfhcWDRe01v3h5bXRGZG%2FxcI0NEvdI0o96mbLR%2FbUb8wqmv0JV%2FE8pC1URp5K2%2BQtJC46naK4kCP4Rua56D%2FRBkNF9srla3GNky6R95%2FX4ttnQjwv9rUmIAdxFh6o9p1Q4k29FLfBcw8f8UK8wl%2Bo4VocEND5WwMaHpLDP7ohb3DLHf0tRGZxM%2FNFt6F4gOk7NVm%2FCVRY4UX14JZlO6f87H4BARlZRrDlfXi51mxh21%2FJ%2BdS%2Fzu2234Xvm7zpVlF0OMMVESWLFtKetKnYaDlszyl47pMYxogYJVCF%2FJAJgzs4Rykjs15H47SBLQHPasPmBvFHcvmcytXFMxssuowTZK1a%2BrHuJLvJjukTnXZj11H1mrYhtZ19VsPjbyPsg%2F9G5fEpx2Yu9J4MXD3gmzWSMhlLsUmjX3jrJLT9rsIVi5hph3U56DfFbiirqVjXvH7fDVGEM2%2BMaL0ralRi9LhcpEEkMICbpsQGOqUB1hGuq89mmVyDLCPWs%2FcQ4H5M7vAAFscSiBW9YDADjglSbRRW8qEz9xb1WxmhkW%2FSWl8oAH8zDh92zW2ogiWlAKN2dWNCWfVpAyrqA8RWRvNGPIGQk%2B4RCZPVBNyPlwkh5FvSzV3cGpq%2FUpVRihSC8RgQ6uP54kmSrfolVts1dpl%2B7oS3MTDi3dgp2ZrqLlTuouRdFeHkTNvD1ZONXa608cjiGxS%2F&X-Amz-Signature=7cb565b1dab442b1924bf3d0e801a88269e485a1d589d54cab521b503a123108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
