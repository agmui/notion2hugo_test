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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQ63BDB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnujfKwx7eD7kcTdlbbvWH7FeW2tK1SO3B2scw1h4mVAiEAl2XmqaQk27CWptnsX4l3XN4EbtKRHdvRjoIDEkDZRxUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtuw%2B4EDWZ2uo9WxSrcA5bjliXEdaQj1vjUmYGKLiLlISjNmXaEsmhGyTPpTKI8%2BlzCEdY89aRIG8qnrRqJdnFNLZHaxSORy6OUEpRXvHzSWZUKydm1bRMbmHtzSc69DEoN8oRp0ZsowD8GfubmCqB8pnkiU51LmiZuKscqmgS9rHprWOzYAHFCfE%2FAtmlG7QRwnxQF8mWIgE04lH1mejlSayc42IKMGbEmQw1bvz45AuoZ%2Bu8dKkg%2FPe8QdNVtVmnUTNRy%2FiCm7Axt7qzezSarsUMhx5v%2FnGfL23tgvdttAj1jnUTOozfRP8FMPtp8aUkdO44HgAuER%2BV8tevOIJBIVh1aoYJQ0SXS98NBlT9ZFn%2FzUdaqW5TXACfQzN9o%2FrCOL5qnvsE1GK%2FyBsjFffg2ZFSgjaQbn1GO0SZAHJMAfqrkVXOi1fBgvbzLuCkseeDciVS4PfPlufn4OQW2RoXZlBVoBwGCff%2Bj9FbNLp%2FaSD%2BJiJS3v%2BZzj25Uvcb5Dvbmeew51r%2BvhpQWzN5IxETcY1ceDxDsPC0EKvD0nAPXoWk55qFg3szzkkGF5RD2JC6Hl1TpGOecFYRbB%2FlWLzIrD4%2F1rREE8WxuIZIc1mUXIUaLKFsz%2FV%2BM%2B%2FsuCx86YMLBzfKyc6wDs3NNMKOv8r8GOqUBNEx0CSm5RbshCbk6CcRUA%2F%2BxQ3Jw2Qx%2B4UwQXzxAfM8aS6VRe2dTzSNXGHnpvA78ktBxkSJFr348NL4t21K37aWXCE6wj4rsubNGntbplAJfjEV3rz5ZBO6T99GKDui8X6jlGU5gs0fzIlhhN0NityyKKl733ce%2B3sbwi7adWedheU%2F0dhCFJv2RIbVkJhbyOWZFb7DUKz65LBvofpn6YbhaLhbU&X-Amz-Signature=82bce497812dbd1daf7a16e08bdb0c0e0f965f1c64f43d8f336b676b5de12604&X-Amz-SignedHeaders=host&x-id=GetObject)

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
