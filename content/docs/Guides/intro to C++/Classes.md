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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXUMXFR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1x7kAe16v0Dg5qxOgjBTZ4SM9u%2BAYYH8GPk5dA1wUYAiA55HBgYK1uK2POfrmypgdtqrqDgZhUI%2F1LYAPEt85Tkir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHBhrQZqtlqk7W8fiKtwDv6fZrUY8WNMyg40WyE6HZAxKPEj9k3yWV5tG%2BQoKyVThToVCclUKD10%2BoZGgy7V7Iz3S3PoLSYCStnNVrjBKU5squWxdi4UaJiRy5atEx0obcRHdXJF3k236JYSRDjPI%2FZ3kj7ZBmNRJV6rejR9ZknpSL7tV7Tw5jlp81Qzvco2%2FIV9AY2ZykJLZwEy9SM7bWGcqECMDQmUTaHrYQykw8I525AsCbqnVrVMl2cG%2BxoPP0Ztgwj1UcPhYohY0%2Bn%2BodR%2FHEe3Vgwds9dC29d1Dy7Aukm1a4uKzbwc%2FHNOr1q0BgLiYrg%2Bua8LkkZXrApJ1GruiY0AOUCzDhD12cpSv8HSLDUkuDSiAVpCcsmx8CuXU5%2FFwLFK6DVxmeviypDQJ%2FejAC7TA3I%2BUEYj5QSn%2FCxmwm%2B28Nitw2oo1glraoxTGy2GTsHLNdjNFjQAq8f7aICuTjfnxtZSpXDdxoQlGPt8CoZftDUNU1u1oQX2CQZBkL4Bj7Zgcwe57KwBgyG7x1QWdSOx%2BFy6vOTOYxLRLWqFF3Ugoz7Gf2O3OLsNDvQEc39d%2FQUg8XTnKtG7DrF6VySeK5SHCMEVoKryWyD2ShFowgbYWMxwUrELMzo8WOuwYaVRGs9NFkosjMHYw8YOywAY6pgHZo6hwjeT2kQhyBEtFGKVEFgnWMBfxnsP3WUft49hTrUMi5ai7DP8fzsSwfegBlsBcLJkPkKbC%2BRB8TyUH6U9W5C4EJbmqg4o8hOsTUVlRc8F0NIh4OIopMCs1FNRW4yGgZwi6nIP9gkX3Gb%2BLJYbFc1svzIb5OEb8KU8zedbm71O3lrHQBmeF%2F5gy42sdkU2WzVMcd7o4Re3x8Yd8HDPe6WLhe%2BY%2B&X-Amz-Signature=7132fde34c55d768b7168ba0596514f7038d013fff3e37e1d90f26a9de6f6b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
