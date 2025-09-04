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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZICWYOP%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmNwcGpL7u2vkSqgIbWRFJM33jG92aD%2Ft%2BIXx1HGwB%2FAiEAjozanFKBa3r7d1KK8ekH6l1BhZ7HSfL1I%2B%2FKj7ADOV4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJbSwnPtGkUu8zZd4ircA3d4rD4FrDBEQj0WVtj%2FsgMdmauCEMuio1Dwz0u7a%2B5Zic4YndXX%2F%2B%2BpYvtUjy9S04zDN0HIDPLPBaHmW%2FAQ%2Ban1NwlqhaaFzZ%2FnwDa3cGSitr4wOSlUTAfkx1Ml8EZU3WnrJVjcDFMexQlkNcWVl1TcvwJglpFtSltwPoWkFktUj9bAi6uNV%2BntwbqNAF%2BiMSUEuoviWvXkJ4ff5sxxKxUvLQy8lhAu%2BlU5gNp7oelFkRKzTdY7RfhjFQ%2BOb3t02Gj%2FSNPPiFb75oFYSeyY%2FKHghoyCfAF9UVKPuQTViqjjMB9hVrgcmTFeA0Y0JpuNHE5RCcF%2Fd7uceB%2BgWbt1%2Fe%2F%2FPNHEiaG9dTzOMSFUDP7WYiAIGcmid0jsl6yPjUjQ3ZWasAPn0ei5HpULsHc9NnvijNZf%2BFE3MW5T6eN1%2BDsWf%2Fo7BoXtr75gU6Wgn%2FgpZoVy2Px8nFdGxX5mLhE89f33GIjLgp0lzQjOKhp9SW1DINg3p3JFkkV4EPW5o5hxrDPiJqnXKgVAZgWYn7fSFrEtsYvHRWaN0%2BpQOp1STjVa2RFIxsjil2qAKcpAVRM58iI6ZiibMzx5KLozvH4zJqmeVU%2ByxV6%2BHg09dnWVm1Pi629uNBk5rbZ2lLA%2FMKu248UGOqUBgXiMtiwPhe2PfWx%2FMNRwl7D8%2BVuTEjXuj3Jn%2BOtN3UOkkprN5rRqa0Hs9sAssGcsFK%2F1v3uMIVSKInpYWCi9jb3Upa3KyuI2IW98mUyEN3Eu2aYz53deNpuBAolTwga3W3SjUNdaDHc9gxWydBNh5VMz6BooiHiLFXNaTbITXdighgRBak62qyqaWepWxle%2B78NIvMlgKksD3Z1JHFnJOGGO1S4x&X-Amz-Signature=40397cd8c6e1084773f3b2ca64df2bd090757cb161f34f359fdd9712c2df564f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
