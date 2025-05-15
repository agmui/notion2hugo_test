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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDSR2S6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCKDWFnVk1j6l3F8fAOBkhHaqb91Uy9FvPgZZlSz9TSfAIgAL%2B%2BVWKRdo1PHOyh33EGjQvh5%2Fg3GG0ZPG4fir2ZWJwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDNxgHGfrcIqivXoqyrcA%2BBLpu0u6GQxhlxGPsNMfixuR5J99ZkljmvCE%2FPMnmrtlA2V78quoRs3CSQk7pmAjlKvu%2F%2FcBHDL617EcdH9OTNx%2FSif1Txl13k%2Bm53hKH5o9LRSWy86r%2FcrS1586smK8wiNasEaa0xDHvjF1q%2BtbQHj53uxwdQyLP6tLgnnJrZETFRBjrwsYQhonxX9vvBkqZ3mVxJPz%2Fb%2FIan1hTtKLYUAltN8J1Vdfhdpx9N9i51cWbkMCuTfBQAEoaFw114crJNn%2BOyLWGnt7HnQWg18sU6dk9WP0deblc5iTgAvLjeWM3BFFMmobL%2FCijZLy72%2FEZtlexfi9PvnX6mbmqtnmOkCUtzz%2BY%2FEqI7kYjwlsOHeO0Pv%2F16prs%2BwBv2SbuWrCuKWryxhfG8SJVlTJikHBFPTWNrcHxwaWMdqjKWv8zipRtR2QuekBc8JRh9ZQjrNZCMgiI01laaw6cKwZ4F37SD5nI%2FjwY%2FH0ftvVIADnwaXIRoCArkxI%2FkjXpNix52xIR1BuNXjFaR6pDkLYD3Q8pTW0v8rOfRed6pj38%2BQavkVH7XKhHzZfEZowSudcx4BTkcHJ1CS6Ut5KCbFNthumeepv9vsEpweAHv%2F1ACsSa4mTp2HsNwAwdqxDwXNMM37mMEGOqUBwL%2BZ0%2BBXtHfpAI6W1WoqVcaa6Mtqsbyxz0sigYDPcDJbzUrJihzF6mKyijtiPDusm%2BRmfqzbFPypBLwSVnuRX3X7%2FZxRBYF4TSJUiidJ%2FRThlgo20gCGburtU%2BAZE1RMqu%2Bqy%2F08C%2Br3ZMfl%2BDphbTX9%2BV6uZn8OJ%2F5fgIYCv16dQOMgyUiK17MkF3jEc0AGCD92uvTPWbm1wsUD9usSCZerJcUo&X-Amz-Signature=71d8130a0ec969ca70757f82ab4a3c9be67e5a3032a551ea59d170b296ceb605&X-Amz-SignedHeaders=host&x-id=GetObject)

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
