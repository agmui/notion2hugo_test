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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGLL3TE%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnv94mlyZJM83PEaUMSkkj%2Fyk5nZZvOUoCfLNtQ1ZssgIhAL9fgkzh2WirwrYztBAlhBt0cdNInbLnUjG7HM0SMBvHKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyualNlMW2vJo%2BeUdgq3AMKt%2BaeN5Ks35Xu%2B064tWGqTAdjmX26Dsib3ZY1foCmO96DY05e15Kz7vZ2JcqhnMNQoFZBgX6T%2BSd3czS92uiBj86xfnGQifa1Srf2BiyH4qEPZOTHoZMDPIdfnj6GNyh4Jh5VXm%2BNDPYw4AIi%2BU6ui9ZziML%2Bin4qNmbyG6RNeYtrs8XfN24DyBRAI%2FtyNjxwZOjr0EA%2F%2BCe16CBs1P7kvu9om970hJByozZK5nrBrVV5z6AdyKVmg7k%2BqFRWXcg%2Frix9Wu3snDEtiOkZP5Ttbp3kd%2FMgm2SLdr%2Fo%2FUYH%2FN1d95EcCnCArceOyag%2BufctbXi2quzo%2BTJMBnoOksMq0UMqcmNW8cH9jl44D2nm%2Bj1N4iChcsISNzkC221S%2FZFrcJmXBlSw6JSsjdNve81oz2r1yar8cNer%2BBPQpTMnmP0C51euJre5i2EYdZ3kYoVRCYu0%2Fe1%2B%2BMihKZPHe0ToHV50s5P3xXIBdft3KJFfOBn2KAnicjeBiKLprNIoM86QviGos9YTRg9XPLTkzFXSpGOOxlZMPDf9hfUmE6z88icjREVumD3cc5%2B5gm6l%2BrG4baZDYFAXL7NMTj5G2NY657zWRc392k%2F%2Bgw6Yo36xoRcNN3qScbFMWfyN1TDjrdvHBjqkAcollzPivRiLXLf2CIvhs1kYKh6bwyyMLmwp9dt2%2BzR38zWRnvdhepXMNqW6kSW0GS45S3oPxzR6Cds4pKZWZppnBayZvhcNYYnWsXIlHYo7UMn8NDYszlQ%2BFQy7vAfQMgqzN0OT96pPniCvJmX%2Bsn6o1kTw%2FXVhdmIbt7C7gRQ3fnO7XGPoItx72jfjllqTvV9YonnNQCSl0pvAxroCvN6fJcTP&X-Amz-Signature=a956c90b5671510a62b32847d9f62bc1933bd66a19941356faa47a5c7a041ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
