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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHYQZIE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8ZR1IbOqlXEW0LK7ruO%2Fw2%2Bk70vqeP47y4LoAeRDV9wIhAJGZ9ASEGFHqwIt1FFoJTNq2ir%2Fu4%2FrsFlz48rSGtFivKv8DCBAQABoMNjM3NDIzMTgzODA1IgzxnVnn%2Fy2Wmh%2BtkH0q3AMkyi1lnF5fFbMa6g0CQ5aBWq8%2BFjrsYXG4Tgx0lX59nWMH5ExnSLrOEMKPgmB%2BCx9%2Fs89UcE9R8j%2FzxvM8HFY4y8lw2ZPtr%2B8IBynzNn3n877q%2BWtC5zOSe8usPd5JerG2H6fOn4uR%2BQ9mDacFOhKURwqIcdDwTXSEt4G4gguW89m%2BjsKVIKdg6nbiU5y3Iw5pQ4PgJUka5uo%2FQ4CQdrcnA9nqYEUZs1LeBNVLFlxE9ZNsE8O5A1ov8zmDZB8bmRZAc07Zum40RIDJ6txQM1kl%2FXKz9hmrC%2Fjq36E09TOxTERrzfiso744M0Z7Ovk4FEv3ukvaoVNhtuSEvzpJMRdofoJRZl5gmyo5flRrjd5JDzozzYkPEm%2BDvCLQt8WO2OA4ObUwIQofkLoKu3tslRn7uFvg7fE0gsWzwr81LILxrg6ozBkEncbMipZky5yON%2F%2B03wrlyIOx5JBrskmej24Ir5oN91w3s%2Be9QFx0TLOAxOI3naeraki93MNu1G3FNDvDWZ1flm4%2FDN8IGTt4snpDXnFSkJ2La%2F9O1S%2BeHzymZPZdUVeMFvsdk3QcZ7pggWjfYoLY%2BmTP9GOnAZMAVsUUYyR0a0fL%2FMYUXLm5Ya%2BQkpHNsh8Rs2pm56a3SzDIpM3DBjqkAe2WHN4Rh7FcFs1ia%2B%2BGjCn%2Fi8Bgif2sFt5%2BRawIe%2F%2B0tPVHgbg9iLLr2NOkpxUej5jdlUeqOvD%2BT7J2K4jcxitvHlP6jiGwlTaqfst31IpmzdWyfLt8gAWXR1skq%2FmXy8v31QAGKebq%2FFOHr1w3TbKRojses3sQNA5taxnZyaAYXMsDLVX2Mi3H9wR%2Bm4OoNqBqZuZ5Vp6gzchjay%2Bne2PrO6rD&X-Amz-Signature=35109970ec287e3d1cdf616086da4e670dcb0c06cd1cf90d2d71ba48c7c2acff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
