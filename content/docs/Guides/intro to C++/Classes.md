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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6YFXGI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC9WHbKg7RemG6iGeq%2BYQCSdMQ5nEaV8JIWxrZWI8QpLAIgTAdmxbNfAxKFRoq%2FvgRYjwj%2FybfCUaKkGb8VYFpDQEEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMutSvsz6ftF0nie%2BircAwa5ztZxjLO2BfaEUZTKbzMsddLaUUKFcFbfMIQQCEntBi3eycI2K04ttjSYTu88ceIAivc%2FoGyxQUCJ5FRfbPxM7sp6G1HD1ikiXipwK0tXRul8Wb0jIRGiYHRywjxJ2DtqjSzUPRxqeRGb%2FBTWKxzUbcy3PTqENI%2FFmDvfhQt7A24YtGOcGgzKxvsXFTOR7qn%2FtG1kVyHogE6s8QcfTgzLBxMvZMGEQ5npH%2BPVM4d2jMLpteJxD5l3%2B7jRiQvgdqw5SK0eKcxq5KE%2FOFJDem%2Bl1w0UvhIeOn5oaX6FGy%2BY2CXwDFYZ3hwnaFuzcpzAMdGeHITiczKsIzWkDua3I20xEHo7hEXGVtQziOtJ%2FVQ7aDkDVuD3JrwazlE0P74MLk%2FuKanATExNTDiaN%2BsrWr5xInen2RpBChEkEYzkFOwAttoeXCcko%2B0ya2r4fT2SnX1g%2FE8IBV2oKpDvd5VWty221o1owG7qpY%2FyDA3a9MKGntLdBHw%2FuwIBju69ux3l1%2BNMO6tC03bKFJMT5tycD92TMfqH8F4WxjUT6LlIsuIskm%2BnotkM2lRKvaYXp4OWrzyiSJczpOFJeAFnlNmYe0IGA9C2YD908kyva%2BLunfhH3sS9%2Bj7%2B3Sq%2BOlXWMIegj8AGOqUBIyDb8xdxN8INit3p6uR4AjnxPgghkn6E4Qh5LxXN4zvV0hJei%2B9Q06PUbTieqvkxct09UGdNJZJaX098BJR0sGuY%2B0zcpfCGtnJRxSNSUeH7IzKneGFIGN1W%2BYQrOhxxAd%2B5Ex02%2FSWZYtcDnMaynZ2x9gYOLpOb06CZcpPm83nG9HzhEWHgm5mvlt0tem9nLcTtWvWheUtkTLxr4cigepHEbJfv&X-Amz-Signature=3cca1eb4db68f0afaabb2422d0d27b9b2c6cc8803c43b796a4f79376477fc22a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
