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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFFDROI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZevrUQMc5ZUBS5yUgDWwirEASbWPZ%2BcKqZjQ3Uq8IUwIhAK258qc6nlyvl2KOKpHppXzuAyg3a8jn%2BfKgrQzrqa0JKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk7EdZ%2FY%2BNyzpGjAIq3APy1guqVudHTGFhMpGHQRYrQ%2Bk5CImv2wm4UVAql2SuimwWo9wBvemA8YwFzXMT6Zl1QdYfocr2VRJ8aNgTEXxQ2DQNnxezffuyKwotwLv5cxCqV9G6x21%2FPz9K8ptEItXQNhK%2BNPEsFtH6IXEv0N9JIXJ79hLsDww4Rbx%2FWsCf8LT1cDW50qW6DSzFyc2tArpRCTTsS1eQtXoaOsnJP51LmvZ29WoT5XHZLhDfgD8e1D9o%2BO0Zi7zmzTlpgWR1CFv%2BJ%2BmL3kC%2FLbJjS1NajuI%2F82UdspvLb5aYBO3EPMtFO5JLCs4XQeAJLiTYYmrsowwm1N5Rn86EAO6lfkyq1JBS3Nyyb%2Bs8VTL4Glz%2F78yh4qWSA6md0bMs1ngAhXG1DP0UqJ8C3UVcjyBh4J4Z8VFbPgUtDXZeupBBiKLZIIoLXrzlOO2ERawOOpDQTWtSb2fwnbP30PJLcbr8oCeQlyp8Q%2FQKuvH2p22y%2BoFmsLhG4DQrzyf9m0%2BeMM64g7LrfG8aqRZ%2Fn4Os1QOld1cxnd7eszmfCi6dcblkhMxNg%2Boh%2FVF10VsHMi00cJGkAB6k8TGdz%2BBd8E%2FyFsxvsXwNfyApkZeRsTf9TEkBGB%2BAKrGhivpLrMcokvaKYYJN2DDjo%2By8BjqkASKMD0XLnovk%2BNr05qgB%2FMbzOn4j8liomrxU8BQpkQRbAMDHBGQZxpVF%2FL0Lx06OiKMHwNMn1%2BPKhE7nSLpZ0SXfumjzIKNkoefAuKB45QKMCiU8G7hDzN4EaeSfveJfPMhDY%2FQcmRiroFXAkjB%2BuZZqkIzoigggUlYIvn5RrcbCHO70JISQfkqexCYYQKkWXRHnWIRMbVYvip7bP%2BsLdPzYqOR3&X-Amz-Signature=103b24501d593b480c5854b5d11c7621da7e6fa81bd6c411ba97f1f7360280d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
