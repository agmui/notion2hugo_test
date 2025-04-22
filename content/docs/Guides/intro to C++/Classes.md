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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG3JJKS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCTVvtVKEB1SNR%2FkAERfpLPArp6pHann%2BcWoKb%2FqKa14gIgM2ifPO6khiwfPrHTbK6zqbt%2B4lgTAV7CV3mpLf%2FO%2BrEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEoovQvcToa5t6ogSrcA1fhbacOfd8nvA4okZUdCIIrEs2DBldvb%2F1insGLMpbDag5vwPBdKROpdY02r5fdUaE0PEYOO6G0u74wD0DsLCWjDXQilGjdSLmXjAamHy6GZjrIcufECkKL4tk5WB4WcL2nDaBBLgXQzrh05KPu%2F2N%2BgyRZnIqMCob1xWSMcAeiL8DBbUpAtiE%2Bcg5UN7iRdyeM5GYbUGos3%2BC%2BpEf061c95k7KOnZlI%2B4WHccZYZHu4QYLEWLbaMr0iqA7Dvhbn5azLhLsdenUCZPVEX8JhCvZCxgtB9qLdMc9SlFjbMiKAIL0KcktCbzgcfnX%2B6vM1zOnC20%2FBktMvBK3MKxr5dejg3KafBka42Mi00swqpiiyTvtdXe58n1ZJ%2FotOuRHYQaDPdnPrOWI%2BfWr0BcTzmZgyqsFli4NGmpqUgsju5FuEWFz9RZEJ41xdejGsdTf50k2drKKovmiCGwfLCL0WyWAbLkC16XZyPTbi1Bdn7h%2BduugOgxiSO0yGiYJxx6IbBj3N4g2MHww7P3h35QdMchmWfs%2BESf6tGwjRqoNN8%2FMy3naytTldEi38qfyRjWCd7SkjMMaDXmpo1LycozfspyaXJFmSknGXstodjpuIwyWRmlrS5W0EVZUNx81MJS%2BoMAGOqUBteCnYScCm0MkP0DI1lzYj%2FebFj4HgxWxlH%2BXo0w4nN5zodeLVPSi%2FklsrrZ2KhawT8aaPPjYxeP1bNuke4SI9lo7l1%2BY47WzoMPkEzttICYpGjJi1sPeLvKIRm6BB3jPhRtpLeS2O0YQLI%2Ft2Cm4AIpdJmx4ci7pOKys4192%2FeDHnydf3Km%2FG3g2PUt3UstzGcsHMJYxDo44qyZm8nu2%2B8qYxzG1&X-Amz-Signature=c2f1a8957129be48ac5e9cacf700f1c691a76f5c4af6543d827d5f0a27375e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
