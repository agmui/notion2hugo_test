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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3353GN%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbxas%2BBiDid64kOSs%2BVCj%2FCdONW1Qb66UPtrgeK56rKAIgVXb9ANi3i5DKfAmHS52Xk%2Bk4apinXrX9kPQ6RzQ89RsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyJMkzr7x6if0gPVircA8iBw4%2Fs48Qqu3sEUgCLmLk24IGOT5uREc0fXb5FuKwF3SnsTckn5CdD4%2BegtGz9rHupWGQztaDUignFIY5AIi9O12aQFmnYpCyd6Ui6T%2BVlQNGkQPHdyHPamy1mBuH8dIkCtaaEM9U1J0qTWGQwoQ3PUBxDxahbGzbPwspeedYBx6Wrv%2BnLTialCt%2B%2FrbclpVZcFQGoDpttyA88DRyc7JHpm1ul3QVXDE%2F0lH92M%2BTviAtCPjFHyJ5k1Ew2ZFxvxj%2FM8rS1jn4pwCz6AK8x0WggwBTjGY3f0FwCgqg8PGSkqK%2FxXYw7j%2FW4yP%2FYKt4%2BUovR%2BV%2BF%2Fs88x6eZg2eNBbzjgcmMJqTqabBmtw4S5OVsdGHpQLEU8l474CiicdNNogNhceivVVyP16lgA%2FaDv7ytXFEWk2Sn4cSssHey4Offqa1gln1FddAbyiQx5JB5PyEhRjGlZzLJFVf19ATGzSoKUA71wfxhotwPadhEw2B0IpFvHALC38OtkH6TiR670NbDJqDi3fBhBHxoNUiqMQJ9IIZk%2FjG7z9y4Z0D6aGM%2FKYXfLGOh%2BD4KTczklXVXcJn965cDO9lXx3jQTGK5ZEJtl0dZf9ENfpkVDp0zMAHV2UrefREkGrmK7Ja%2FMMbdtcsGOqUBMT9g9TLWP%2FyfuStxrTQnNiVikSaF%2BWSmOo5NLdzmUrb2DCzkXSIsz%2B7jnBXBHrb1DlVzxdMsf1FXz%2BHZrHsyam5G64zSiOm0CS9RLZs5LuBsTDiapi%2FBX9ztES9Mi%2FL94sCpUPDkAl11ayfDPgHVzDBrA7Awu42x7y8zOPiJNgM7kkFSBJ45XYZ1aBntkxLi1UyGhK7YPJ7qeNrLvfDBAvhF9gCs&X-Amz-Signature=c88388d33cd26caedf86dbed93ef1e6ebb8834009b8a123c282509f9595def27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
