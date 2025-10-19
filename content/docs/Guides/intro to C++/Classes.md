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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZUFTSV%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCf%2FSMI3%2BvmUxG%2BNXujU3iZ3Ga%2BfzJQmYmnvWy1kahONgIhAKUJRPzuzeAoXewwQEuS%2BE3wiqqivHSEP5bp8bysLUq8KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxydPEGBZg4iN5WOh0q3AMkgtFgBe7A3HTj56joDdzC9IR5wmM%2FZMvsh69AT39CuNmcx%2B2PFwz0skJdH8xl84q2Whl%2FnXCPo22QqlT9A2Ve1UDWrg7%2B4RzaFJnlKKQXSfK23P7ME%2FQHLnbtxJm%2BsNbFES4Vt9p3AYmSxUpULLqm0axhKt%2FI7mN6RGf9B6vvMSuKVmndR3lvYl93ivv%2F5kg9RCVJKhxhRkorocTJcVwGCxwvTV6MIJ2D8TvcMDoRs%2BnxDwsDorKEPDZnZxa9ElauQ89hn%2B0w%2F6H3ekvl%2BomsRcy9DvagcR648mxLVLd%2Bk9KRcMwwis9XKC2SwSV2536Cl%2B5%2Fz%2Bl39rEsmiy1ynKmF9XhyzmjtfP%2FdWBpay44EuJ9UupZfAs%2BNPxNxDYFFAOS46aDqlyK5v66Y9VjBPfKuMlyANVUfcpTTX%2BBo0lBuIH8hP%2BjpJj9IJVtjfc47CrZhcogEknB09j%2BM1Ut%2BanLizqL2zsbEL1ccWI95xKJ%2FD7hJwX984nAIlTwlST%2BLy6NgzX99JpfN84RJT3NZ%2F2Q91PocU3HYahz6IKfP9QoT231YFLICiu3F2CXTFHDQHZFZJBH4V8IqTZSJ9UcAxdaO%2B9cYYTsQVWUjJFpCOkayhK4bTWRAjiaSR%2BGOzD43c%2FHBjqkAaLZhZixKfhvHsUc7GWLVVj%2B2LTy9PaIKBG92Ix8UvdtPxMR1lh2zXY1HLuOjXrsysmku4u9AWBBuXMAvE0OdLEVprVEQBm6R93iX0nGK5RD%2BSfcDoKdDnrh40LpabyhH76u8Hcr9PJY2i31Am9VL67B0ZmL6sD%2FQVIuWiKwsSClHSmpIXJi5MLXPtQObNrOuPWFCueBg38rIduj3mBLn1sv0%2BPY&X-Amz-Signature=58b817549fe9b8fd7505af7e9df3df793568e525e949b7b104ee09290601d067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
