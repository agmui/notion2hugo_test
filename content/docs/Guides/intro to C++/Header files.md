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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYQV44E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCkaPxQc8ZAEwYOwfLvA3DmaGV51ZR%2Fa3NwQrqn2NSKQwIgZ252HSctUq%2FLqVFb9yLjMzccLZPRussNF4wOXLzIa68q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIlCU181UtpTQsSKGCrcA6Jw7kmWNAHjOWAdQwWf1qFgLeD4DSMJNC%2B3Kw8mQJIM25vi9wNxQyIh4FGcNTXpKCB3B85XQwc5v532xyxgWVblViF%2FT50j7VhYaGpsgIwRUYfAipaUlyf6xihuWmousDiqgYRsefIVPQQoa0J6IlmAkrD4Ug%2FUtA1nf%2FTne%2BPcrlMywmCYupdyIU4QZl1Os755TVp4K3vXZ6EO1L57lt9JFSPfjMBvPKVy7ZgaKA1MnsosgUxwPRCXe%2FDDq3QAABAptnoNcRC8yb1VRoGMAvPs21wDUXNuYVEOu2J0gz87wGhrVmXhO5VQlju2TtAs8GRmbeovlPE1vm%2FgwIavRqdrEKiY3XIS2Usvnq5Iv2kK34mSdk3HWeAJUXYkB6rY1l8ZoiH7lyXJ4n5XOnf6jT7KfLBXehKuQM82wbFlnc6CCua4%2B6ZyAUpDhd9n8rWSgP5hdE8srXvXkjUBoRD5YUZnCmVUj2jHeHJLVCnQw9ni2c57VE8IOzcPbHXtsdEIfBOBoF3rgZ2hhgzStbXVD4a6E5MJslrNdbcod2qav9%2F7OION8M9FRPepjxBGeAff8%2BLC1cL57f3w9I430T5%2FaAKtAmFPVlPuxPqvp4ineJ49R9%2FT4mtepvc2FjJmMPmdz8EGOqUBoaNE7N7%2BSPwedxhObpvdRUNMRrwI8ny3Zfq%2BdM34OR8DYLg%2Fvap46AHKx6bD1lmAPpEMx5ISu5a%2F0I39jlEFYiLemUl5DpQtXu43ZGW9peDrcO43GaE9Lazi3GwiTOqFGYWWddqpsy0u1OqdxKBBckX5dsVkmZXMNUVRRPUxhXfMlkHfAsvbOBb%2B%2BdOSbHlJa0fYd1BOuyRrGAK6RClnh2f8EWdw&X-Amz-Signature=462955ac49ca686a2f15b270104cdf84b4f4c4b18c5dc6e661d992f532b9dbb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
