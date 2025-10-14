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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCY2WUH%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGum1p3Ud7FlzbzuiF5uq5T20eoyPExZfb8aKEZ62KYVAiEA8TUUY3nYWNNrV9B6EBPnWFLAwNE2nX1crzO6MLquavcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOqL5yq%2F2UHEeIwvJircA86y2Tf3c5JU3KBuZ2pOO11xiGiouYlHFjzHuZ55DLW61xiZGwMF7tNCb7xttdxP9Yr9rjE9r6tdeayZyvfJJrJs73AbZvTBP2a%2BOexnzTjcr%2BM%2Fa9OkvmJVujcq0IuxMk5%2B6RqLJg0sV5IXqWhth%2BzRLHlwfLZdi91uoAedXmlVLvN%2BPvHIadwWqgUdT6curDh4XaRCAKuLzYHfyK4ODdTjsV%2F4T2aHHYvxkvdy0LjNHUyJAcCopnUjeuJF7prXIy5UVVLTPehnN5JY6QZI9eB78oX%2B99CGDbqXNNmBPuSWydfj3RAkmYzIfCdKb49hcpmdjTVWxh5BGbsxfsxI83%2FD%2FwvuFq5O42WOF4Ls61eM6Efk7VrIu27%2FoCd49w0Q%2BKQ2C3uY0LzCR0R2RJXr%2F8hii2HG1PtSv11PdcByM2d2v6z1HHWbz5VF2BHECCn7k0QrEvTxOHWOeJ6M%2BtqCtxnzoRiVidA2sqmJDA4T6lttpr6s1RVKQacVUFJlFCbhRyR6PLBkEMTuc4lP5DZladFh9CUGZxue2H9vswkG0E%2B8ScrbuM4zkUVcdO8Fl%2BCi%2FJ%2Fa8zPQ03gpdQFOwMHwkCy6FzJ%2BFcjviaM8VoEP6OmzRHmfrNjV4wgFiZmIMOeptscGOqUBkV%2BT6oU5vPQ%2FfZ6C63areWq0kJk9R126n6IdeHTVqV1fZd03w5jZz3yK3ZMMEZtuN47g7n5U5XUSOy0XZLB19MZ%2BAXzZSOOweFePfsQ5QBLKqSwU7ozl6qf%2Br0O9NTEnY42pDZrhxw%2F%2FIaYIbF2yYUPFRRgv%2FOYocIMRiytfTETQopqzUd5QR0DC2lSSZMOdVBTXvDe4e3H0NE5%2BpNroEw98lLWL&X-Amz-Signature=499fd588dcb43abffc74a389429d7e688454145cf5c118b5299711c5f63f1838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
