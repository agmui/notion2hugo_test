---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGESSH4C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDXh6r90Su1UCgVqtpL49rLAmO0tiQ%2FnGlcaOWBQvOM9gIhAJKmhnumf%2BpzWwv3ltWAFB%2BIalVHc1HDiibfhfKMSBDoKv8DCDYQABoMNjM3NDIzMTgzODA1IgxZ7BqW6nsqXxtbp%2FEq3ANgA%2Bn3TwpGkxMeGELpX52fe5fVgERJX%2FfJpzxLoFLyq2oRgP4O%2B8Zo5jpT8NAU5nsjq2DbZpfZvoFy6VUKqewDSh1WkucN%2F63v4KFiPLhuhjfmKZNo9oGI6gCwTU3fYdPuVvF0gCSlm7x7Hg2FPMeJ0lUfucITlHLT8dUAXGbxygMXAh3rRTjQco81qSrcOlXwBdmhUSbyFulrC7ZAj5RqmqjU5bSXiJ7xUXg%2BS8ICzj0qQtrvbaYh1oo0MDx31n6ojt7oxY3IVumWe1k64ocwT69SNI%2FrPMD9n98MwRXiJNu7GBwcgE5fCpovfnCxNctiopYS3UiOoYI%2BATZP1VH2GRRa0sS70Dvp%2BBDuEL1TUNtZu3kueYvcUHCMZQpxt1rS6%2FBaEzUpeJ%2FzCf3DlAhls52l689w90fr0HNccG0cPipKpA%2BgLe0f9GKbNcbxbuUC95xGftdx4A15j8nPVASF0AYuj40GnBlP8QJG8xEKQbuv%2B%2FfMswjnVu9llB6h4pKaBX1VhNL7xFjefc9mCazu3q19zkaMLoWfPqSV41q4p1tpMk%2BewUa3RTOQ%2F16Jc1%2F9OGgISCsQh1fa3JGSFyJS7o%2BNbaVVFrQD%2FS2Syo9sdIHcp%2F4t3QMSf984%2BTCN%2Fom9BjqkAQ%2B4MTX99b1FThordzgkYlqBgFYXDUv08zk1tkaZxqd6i%2FEujbUhBeEzdC2YpLTigUKb2qHG5WdF3yO%2Fpa7HilNo07YnX93XxmcUDPDAEXtf756C1vf%2B71Y6incKtA80FaPonFUx2Xn%2Bet8Piwpyaas7E66ANTypmyMGg4yy1aysU2SC%2BpNvx4LECgDa73NebooqlcPpLh9uOEQuoYpsOP0TP%2BWb&X-Amz-Signature=f8ca4f3ca8b76d257c66b408b199abc5149530646396e7c021b2f93788678c71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
