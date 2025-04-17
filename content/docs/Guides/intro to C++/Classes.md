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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCS422G%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQjbAWnbjH7VeY33M3vjyPUFmjuDBY8Q3BwibS6vfOgIgDdN1iRdrqFZh5gMclF%2FSye3f4tTVCwfspVoYs0HQ%2FKYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDu9ySJSbfH0jhABFyrcA6K3eu3zDTV5eOH%2Bb6GbAT1vPr%2BKzbjR5LIgYt%2FxfryTb%2FYP2kxWpMP7W9qF4siahyyhKHXMPLg73p8RdDlA0jRSmwk3d1jgXgvrrgkFQoHnz%2ByZ1s%2B6k0rxescHzEfmCHdvdDqXIT8DdXKlVX%2FM1EFt1toq0ArdsNFccapoQGXoD1T7ncd61AHoC5TML7VRoGI54oZzSRa%2FBQZtDjg0TJOOzsD%2F7u7nz3%2BInBWzHDRHXeO3rLiHmXKqIQpWqrtTtMK8CAOFf3EE%2FxBxtVVMRgx%2BVw4orh5ZTB2fvz3n3Ha2jt0ziapxAOH50KX6ONUxummHZ0UgUhs7xf9XCreR6hUYt99Op8nNy4ajHPqbUIAMuFNvxb%2BlD5fkcEm0gu7RlM5gfTUa3CaDvfrySpt%2FdnOZsHW7hMHFfBUJ8aADA5o0UgerkQh3auzc9uqI3GuOUa8Pb%2BeFz%2B3REtDXLgcbwsOlrzLafPgFh2DZIc3SRRGflNa1l53Shf6KcoKkyvO9t5FHzeZaPirorDoDixS9ub7E4HJhy3hmZs5nc8MdKl9xZoUUuMzZEN6cDGf2RsLqu3INL7jg%2BCfIWSBFs1r4LEoBeLN6Qzb87LQkrFj7nhp4ifK921xJTs0TFYeQMPfQhcAGOqUBQLBQuum9IZNAR14BHLHHa1TCTlJuMgYphVtQD7AZT539ZE91vy9jHw5FFlOtp98WxUkScEyW5fJ06K5esvlsKoNTogoru6WnfR%2FQRjpbajtc6hgYQdrXQGVSE74k40WMKQPLr%2BE0cbtinzLU3iWpHoZnrVm7so4onnzz28gtFVlKC51YHF%2FegfiAMd1oRyGgDxxdhpyMmB1fZD0w197EhAwgJj1T&X-Amz-Signature=667cea63b84f3a1f91e1e011d8eba824e66a0e76a442fd968eb611bab4699e91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
