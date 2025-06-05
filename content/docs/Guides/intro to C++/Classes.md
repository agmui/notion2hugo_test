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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RWWVPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIETMOd8YxkhYjh5stGgjkhJb6l%2Bv7c%2F90y2vUYT2Up%2FtAiEAoHNM%2BTufBc6oNGcp7iyovahCQSN6MtR8T37zb9Leb9gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCLOs%2B%2FW80H0eUyPCrcA%2B1f7Wc05Ihmrf4%2Fdt3LKbTow6M3ykQRptyLKDVj9RUDCKbmj8WgoTyUHd8oqqe6eeud8uMBpaFYGhQZCex5qm1FXhob81hmYHUYVUJ3dpvrYlcdilyxuqHKoG0Q66u8u0sjIO%2BBp6Nqqjp9m%2BlxZzN%2BJrAfWo3JWRgltWcfnRrOaDbiANHYyowGuiNGgDnm1vpzv5Q1hUUXKS4Rhy28q2G5H6g3h7EctT4Ocfl2hJdhWshHpLIAOYAFp1VGfOvo8OG8HCYX2umw8UI1xU4TLMBGcPvDiLxrF62AXV33dgJfFlRchUQPlKUBsFFU5n00bQBEPiVcTPFbM%2BY2HzJ4y7QTdA6Q%2FBzbOFtiLSbWTWPDLb%2BMl%2B4JlakBBv3vlSf67zNUPzxSSbmHvOuImlBLyMBMliU6T0PmlXCQJklWfWDOr9x%2BeV0oT4R2GS%2FeDYe1gPGfF%2BkH0nJ8ZROnjAcAi8pbjWP7WzbkRsalwQXTdEUi5C%2F2NWdEGZV3fFNsUMoAqrvPMzyqSTSFKmmpyfuL6QDJcIk9d6ygIc0hJdTKdIqM%2Fi90joW7kfeCMR1d%2BgsVkMnpVwksCetMaWYLOuaF9vAh2LKaIHqA502lOXH0lMDUtKNn04CJ48Y5Xqj5MPTXh8IGOqUBN0LXQLa%2B8FZmfDq9XBYm4I%2BoMHZ3lAponcgShbiz32Y5W97HdxNok4dOBpD2fSBweqxU8hhR7JxkaNhXLCsN5%2BDHHVFkdVRHCQfnZV8P2D5g2z167fOI6zYYbylO1QXr3CAjj1Dk0bbleGlk4xeymI5o4V5mpvNO3tq8bXHF84k0avPfVmLd0NOq46F9uvU1Gi2HgL3D0X3RgSdgGX57i01c11Bf&X-Amz-Signature=e0832f2a232afc81c8663c5574ffe8fe8ffc038aa93aa143f2c28533500984a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
