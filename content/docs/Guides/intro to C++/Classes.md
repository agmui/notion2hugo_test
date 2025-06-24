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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4M5P5Z%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAGk8ZU9w0TMAjY2XWBe7%2FicFfJn7NbTE%2FyqTK%2B1ndFtAiEA1WLimaCQnVGRk3ntBICx4H6GkvTGNDPbRYgJsi2r5vAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJLy79DlOi%2FYBui%2FNyrcA4H81tmdNiNHbWME1z8BMcKUbFdc8BPWAR2RNwRn9kkxQebrB733u%2Bu01BbjlneuRLu8n91Bc6NdowsJcVSN7%2BkPr6r9ocshaStOt2KX6yo2CgWZUJT6ZMlBCMt5Iy2gh0AnBXDwtoWN5OJfTJ345Gl3ma9v7AvhZArctvHkWkAOMDkvXHcZLMkrcNIpJbB55BGwuMGF5O4E6FPnerX8GvMDgYBzKM49gTXg25JpSf3YI%2BDrcBRRVFXxdLbOBeErRwBsm2xB1apM%2B%2F3n%2B0xW6ym%2FpVDZ96U84l2%2FmU6Y1SZzohsbRNuTNFMecA9GvchIeEYucELyP0s3ncoHseSUySmUmFaAMFuD0QkV4x0ZjOnb311OtmLHT3TP2kcruhMQBxxVQQCe%2Bev%2FgXqSp1nnPluiFwQ61UTXQ4dkju5Z%2BL1E5p0Eqks42Bl%2Bg6MCESTGDRHpDYx%2Bjiqxe8nlAEqrYCOWNCK62HUQtemPaKyeoPDjUd57vuVfT1sfhTd4xFFzk8H09eIKB2ANeI1tbeaRuudYgyk8nZQA8ZAhvj2mjRcFzLZbNgdBpkU1frpVUM0BkY1nTnB%2FiwzHeCdYX2SjGbDPggQ6Es7iUb1YqlVh0j0W49j7PwRK1KnfeyNDMPa968IGOqUBEqAgj5fr%2BRbcaaCTLtLh8YKOF0GU31LunEx64P9StKeAIBedz7kiUsgBiEV1HDlFs1TuBnZ%2FvNPcSdKGIJnX483BxEH%2FxC%2FROw1DtZ6wj92awE0DSWjUJ8p4gmYNBmgLEQAqvBU5ocMtOz0x4GoSAtHd4IL8OY7aYlz789akX%2B%2FnOu8oDSgkswV5Me1mRxmJK8faCKcqB2OwXvOeXzDb7YIlA5KZ&X-Amz-Signature=0088040d4628fbb94a3aa4f99f046f25d7bf2884f68fabc53f81df707e251d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
