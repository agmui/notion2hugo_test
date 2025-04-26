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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5ZGF32%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVIgZ4k0QHGlkjJPmMxqf6QWeGK%2Fc3vIbGOl5aRKWuQgIhAPfW6yxF1Cuy262czrbwl%2FyM7rveQA%2BCQDiuVbOAzJcRKv8DCEwQABoMNjM3NDIzMTgzODA1IgzQxd7LrPXoNwH%2B9Kcq3ANRM6ZJnjX2M2m5cDcQLkr5avboXAJf9aVVc34XHpru%2Bbkz9CG3nGWp0e%2BeARbsuzXJD1LIDLrXX9ltOv9LInwyiCeQ%2BJ5bdIO1lQmh0FW63HpCGQUtGN4Ulb3UOnX5EiTZuuQnsEnOGm4kD96yiCcKNJjVZ7XE9ByIj3MLYaZEMmi7Jvg6kCCuAB4zfJDEenAEaCl8I2sp9C60iwNE77f%2BXuqiKkBDMrj7qlnTgLy4ar%2FeKVY7zx8LCmJ4RPYmtY0Y4EJ%2FawGDwksARBRZxoDOhtCvhla22S53YHwD3vAbTiFjMVV61Gus6GxLefKx2d0uSrYSNgErKjq8CCgOCktugM9hcnb3JyWgw4n8hbZzz4x83XeFGen24O5hQRgV2jEROusOno5aJlslB%2BiKOR87RObBkwO2o%2BawtJxaT%2BvwfxO8l68kcKUqvyoCkbowqop3WiZ59j%2BwF6DApp%2Bjn75yrWusId%2BPtxngGId4tUa1W%2FCDSiG8RgXlaIL8dYR16Y%2BgigRwW4Gb%2Fp%2F4At7d%2Fbnv7%2FXt4AucG5BBK5Lj4M7lT4GPi1bVtYEG89NQZqx0Uwww%2B8CaEfc7LdIFkquTChD8nNX8JfnwW1fhSndc2Pj%2F1lnhKn2U3UYqWBDhNDDT3bTABjqkAQyM7o5wEpzWKIuCthTnOJKz3vJQByPOR1nM%2B%2B9LyQMOxG3wK788rtSP1CKb1vocWOr3%2BZyZlfid7s1la%2FAATmNWJR6bbWViv4uEvDxDviNdpjpjTaRtDe71P00dYkKJyo0uAraBFQwp2rMzJydlSJzLWR%2FZvgROVZ4N2xnZ1%2BM%2FlerxrZkjRDKrJtVVJTOoXXb8FjgV3wqUtI6k3JhDsn6RFU5s&X-Amz-Signature=817776477a1689e6defd64c51432372b4a5ca2c36e310d37e4e1c1a39176f3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
