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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITJQCZ3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD0IiiXvlVe0nAWg6IliRWqHQgFdDTYBsruDOZpe4i6nAIhAIlqWtjD9IJL21sGWD9BV5TphM05t2OCaPEwgoOeUOmwKv8DCFcQABoMNjM3NDIzMTgzODA1IgxC87R09a9JUS5A%2FTQq3AOtX4FR2ZjQqcv1Wex39qgnJYi%2BxrvgEy%2FUA521yavfkDiqvf%2FTepQxfCSGjowIrI%2BfA95dp%2BJTmy%2BAudx%2F0KjK4%2FVYZCfa12tdURphu8IZDV2rOMZAFF8jcyhQEy37Mvcda6KsOZIFXIKK%2BmFmorlQQqKPz0tLS174rTY2K3DR8F2KljpjrFi70sxpAVGee5nFujMYQA6332kHJNGHorfbS%2FXYADjyrsWTf3imfEfqUEZgo6w4i53V5LXAzgSuZ1EhkAEpr749lUf8jMvWyGsp7RQd8Vcyq%2Bz%2FJESMJtmTxZXTN9eK4S382T3OGqhp%2FMLjk6WBXAKuJZ6A%2FCtIojMcdiirQf887%2FOEzBHoYV94A%2FUolj0lb11gszp%2BCn8rxbbdraMT%2FcJN%2FG%2FMu2aPdInLGFkLQpQmHLpvBoQX57lonpTLd1b8LRlYNGSERCjvfQWWHYrepk3EkwP0gbkdtHJS5pxmat7F5uUGzFfnG07F3SZ3aM70VPH0cp8Lmpb%2BIMAxNwIwfSOzYQ6rn0aTUDXjFsrPTamdk4SJ7%2BW5VRch58IVAtqlqxOoIr1K%2BH15S8CSMOuSpF1QxXqz6vVJp52DtBA7CvV%2Fhb9IqZKtcmB0iiCRinhJdnFYP%2FW5VDCd%2FsW9BjqkAe2dCGXTB4ihDxYlouNsJIjDoulFIqvbPt2AOaj6MKMfjQCQVMpXUCUJkEpb3RYxzlYp6fbc%2FZ%2Fy9RV7Ym9dbe4ISJKvZiKGMsZ92BFjWCnVWroaFnPxIlrq7d%2BZDIGDWBsOzWdIIV%2BFfSBCLYveRxQMYlERn5E0XXbyE5sqxovb6M4kWwfyeoW1ABddnVVE1IZJ77uyGAH%2BKeVjcmEEhzGtks%2Fr&X-Amz-Signature=2de147043d7686ae76066953a57b5b6181867d649319c50ef18ab135f42062de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
