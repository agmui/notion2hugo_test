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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJN6SLDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDllwprWN0N3dbN45o2Qt1I71bSeiZpP4NQY818f211UwIhAIhdiSU00isXe3PjKo58fnN%2F8QZV3IgC943y53h0bfi6Kv8DCEMQABoMNjM3NDIzMTgzODA1Igya6PoER40saBKjP74q3AOJKW5NL4zcP0yTJxv7WsDApVoa7D52OonQXlYCaQua40xToXWhzM4k3cY22dKhTP1P7zSgRyG0aerqWdX5dgx4xrAm6mct4uO5OdrAIbFMxCaR72rF0tgKMPdmzRvPUVQwXHjCdICjaQG5KnWGPv4l4vLgZ6clECg6J8zW93b0LO5UXwScIazY%2FbstuKiUy5AN0SiZs2cI%2B6A2iewwgLCfF012U5M5iAgr9%2FZ7jRST2WEgaANaThDH3e%2FxTPkGsm8Yp5izHgFVuMAuX00eAiiuhU1PWsIWfJ89eeNqVjMNdf3TW7fTk1VqQ8b1%2BsnKgenM8ALFV1%2BQ3F4XnyGqponFqxTSuFmfIcH%2BFF1UE3zrMzBTV%2FVgqG%2BhqHmHdJuptrHXuZ1dtUivpMg5HiwtjC7X2Xo7QHUHMbF36EGoWTGiA69vzD7VdFuW5MvQZewKupcRFq3fExjGQ4cOrCVCIOVFInQmhQ3QusR58xbeLYj%2FA79NAQeuDjhv9eVAuRWnpW2AJIxzaRp601NB%2BtnGPVLhp1%2BNUJEDNFmoFAZprVKRIVUozgnGywxETciv2tt%2Ft3huRpbhAk357OsbBP7LO82uBre1l1BDaUaFpMD%2FBgbNml%2FEh5a6Wjv1pBqyuDCEgcLEBjqkASJob%2FtOss459MZmIt%2Fd0iTsFExao4mYqwLodDG1ks8GSo1iy%2B17hyBzHRWyfFCOoZrmfS%2F8QC0pReYKU1DGc8E0E45kzmR4a4Jd1WXi%2F9DokMgrrqxhNhGRrNaQdhNRrrwbK6Aoy5Iz%2BHL5eIxOHtp8oA2Xk%2B8R0Jo%2BRvUSo77KPKX289DpIQVuW0lgGi7dFCqf1nDgvkapUjB6qf%2BaeDyK7LOx&X-Amz-Signature=1e122782913d5321529b3512dce710c169ae1f41c87212dc847cab99cd5e8e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
