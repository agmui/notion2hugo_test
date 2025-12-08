---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVT7MYB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHeVl3JgU3FzSDCOfR2bhlktekWacN1b3XDh8gH9%2BYjAiAHZ0p3D9la2ojIhk7qbMHIhyDH6CMNqel9G708mQsbxSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsjTWRsofZJNsmD%2BXKtwDbU6qCFvPtstc8lGt%2BS4do%2F1zo2NOkI7p0ohdUJs%2Bu2%2BlPKlaNwaFdMguGiaJysnDfw2Q05qCaXP3MSIJMQ83zSQMXtmB%2FW3n3WCPATmlr%2BfwjRRjOm24vmCcF%2BffwFC3zTdr537QehM5886c80e0MNnn%2FdHvs7hnok0hrYcf%2BXcjRTJ7ny6lyGqfQDd9NDhjinsGHJtDBUUX%2FC6qhXIA%2FqEMww%2FN3tgw%2B02C7PbAYAjkKJlVvinmrX2rp%2FQMeX9y1gNAhogvUNiShP%2FSKdiE2mZNfI%2FDVuCRRURtCfAbSgCXLZisLipZt1PJqqw3RWM3hHdJslV2VlzJzdM7J5Ehc3YIwSmCjNiPWOznClj%2Fpx1pYk5NYWLTqIBQIEkrVXBTJP7TDia4PucTOkL8wDpQKq04LWeqYlL9Q7uilZ3vYL%2BrDssgpjz0ac6SB41nv7YT4Ki3FK3qocQTaRlUrDBXnBR6%2FQ53gAaVKaCfolch8SDS%2FK2EzUASj04Fn3eNEBCxYob8%2BcAMXu62I8imG49Daw%2BW0Xvi%2BilQAMw7%2Ba6EyKVPB%2BzpKTdU3ZK0d9pMqTDnIpK5VPKNYi9OIMB4aUqpsbHi3i0HtuSXoBK1ZbjzRWLBCkivC0cVba5LbEgwn9HYyQY6pgG7UyWmtlZ%2B7YaGVqLmq8vHe0yXxERVumSJ8coxV9mjn5YgBPIXv5pwM5oKJsGuY%2B30Zf32rN%2FLnLFkiJBBql85fNLzCUcLcWaExfX3DbuyL5EMLw5KUlD9utRDgwdAn0bts06itiq5WcMlyyO3YPJROVUNQhlz1Exc3i56kS9fV1GkTQo5KJGCWXMPNI1EvLD9EQIOBHZ6J5qBoWv1HJMvNWLgDJ7Z&X-Amz-Signature=f19fce59da875612598316cc9716d29dc264ca4328c324fa6b49cbb9d9a81640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
