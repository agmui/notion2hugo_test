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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7FG5JO4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD5IssCJZJwBxe0kC%2FkZ4jl5q6bDtZbLmBdnD4abOmcwgIhAPczpkjjJZhrkT5dna32fWRTEorG7wCGbq7nBRAR09GQKv8DCBQQABoMNjM3NDIzMTgzODA1IgxYZgqvV6L3nb1la%2Fsq3AN2kf86LQ68xd664rezPVA3oin9SvnEs4ucTI5f7iOAyLeyNfIZZgMmxJ8VXQEN85RcMypC9%2FbCgeNAGl6gddiQpU6f3U7bVnAwtjHKMbvLEWj1403mHjvE7%2BWVY65oCnSrPmAUkk20iuWv8tMDyltB8PljUlO78x0SdSEZCZ03P0BrcHz8Hi0TGcHnPwpqJI%2FvKvEMWvO276zB4CF6YMe%2BuUb2RhCBWktiMu%2BnnSD4vqRsaNYHApMnvW2HnqhbZwGPdEhYbQtzYv8XGc%2BpysBPaU3rlrH1IloNW36zNPgp48MMbvtLvCWSZwhzvDZ99TIpGSvlaeSf19pPZdOtxv2dypYjJanKabnyr1dcoUJwQe2Ge9MGsRU%2FJR8IM6dBboWL7uPIb1s8xb9%2BIIMTHTwbpokX1cAyY1zfxXomV8skII2KLbS03oNkE8UrIzbCaihSW6ivrHJRAWyDticI83cykuvCJhNEPK8ADNAyIOWbALB%2BcsFpbJzRKNA7EyJCp7vUUNJI%2B2whaEk0jPPw0c%2Fu1YiXemVnkbvZqV9bU9ZV5o939nqzoaK4esNF0WbAWf%2B8t48EmGUa56MQb2xX%2BGWCbtikumbURpID0c8pkUMVaxyKYMj%2FCpzW58AyADDD7JHBBjqkAWF0PXFkB%2FCMjC1L2JxF%2BuQC23qJoWPwEssdQVh9c7nOzsUMbFni6diXKUlVuV9stx4JafxzT3zM1ryTDxsB8tyoQBofFTU1JgDMDYxJx%2BerK%2BBYBrCptiBlsVaM1zMS2yj7G%2BM72%2FkZYrjk7QQc8wayEppRt23HX%2FcqafvS6yfKTAwlqIUoGc3oOjPHBk9saa36UvLsptv8SFe%2FvBIVNUplQOE%2F&X-Amz-Signature=ad16c11aa439e87ad33330a957525e336464e14dab08b7d615b80507bfa2ced6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
