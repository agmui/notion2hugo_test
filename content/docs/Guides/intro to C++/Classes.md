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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBMP5N6X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpyoMpUHamV9%2F8I3lG%2FbhVv%2FrsBz36XXdUmMN%2BpZ17gIhAIpct0XjsuRlhMlMVKgf%2BYZUVBQin%2BEZevj0qKrNPoCVKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyedoOZLkhGq2JpedUq3AP%2BdlgfchqIxsv8Baj5uH7q8HeUO%2FKjE1dclABzH3MR3xvhrlaurQsCB4GeVjCHriQpWaDmbww80XZcNzik8IobRW%2FlS8Dtx%2FBd9woYWI8HCL0H1kU05T7LicvU4rh286FFDhGKIT%2BqlliKg6eTjVSRHTWFfCFWsX3k4Wz22DVJeN8ZAsYkMc6k9w1WaUgYBr44IyxaSMXYYTyZdXyczYsAYRRCJclaMQyK8Ozv4%2FTSlibBC90s0WTnNXLcNBXjZL%2FfOkvHvhWofYCZLsy1I5aNtC5u1ERPly3h3ZCG5rjOlfk3ff2tZ21tf2cj9hBg3SEF%2Bv92xbhpd3uEjPbeU77pXbgBnvNZkKLEnhRphZ8eR2O7upjC6H3KKZAsTAc%2F05LLuPRM8hFh928%2BwmwfyvvMhGCmZQnd8gaIM9MZ3hTNhuyofALRHbFQauP%2F%2BRz2k86ZDoi4Ov%2F7cWWnHb7XKfrXRMtmZc1bqF7hh3BCQU3qWHYunc4Y3aOW7%2FJ6KMrZV%2BSp2vFYsjRRPvizjNIqp3GOzfkYDUfLxma1sC0f5E7m%2BHbsSMJqBbLH5uMk%2F1OdpBzxn1hANwjaqds4EPHPg5VWu170wXjBQoitrNp2FsmKVcZvsCuTmcYVt2anETDBt%2FXHBjqkASVHSkiuOZi4Czfwl72Ncc%2F56a7LagIsvXCh4sJ7%2BIDy5Co57GjyMq54C6iDK80J7LclJUb%2BaWWVtAu60%2FynXYHMVrEdmuqFVXCPzPjWtpAnenTEOtZfBci0H9TPklNvfKDW8wcHdpyjjKFuX%2Bkyc1Rbq4KkgIlZWRzwnpByjW7S5l%2F1ZdWviuD8Q3RH4kBdAnvJmNIwNn5F2QPkKpXX70sNbo9u&X-Amz-Signature=65c397d93566d4174fdc1b611846d0336782172c0464a6764cf8984cc8ff5d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
