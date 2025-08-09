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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDRBBMK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO7zUTLOLDf4J5cBdgXzuEOBo8HN4az%2B78xfV6pI4%2FlAiEA7g9a%2FPRByntH1Mct6u%2BWjG0JudOBTBy%2FLvO183ekm1cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMw2TzNc0CQrhcYBlCrcAzoQ69SnG%2BZUKa%2FHlIduC2l2y2ToZiUmTzICH9KFoCFA5rW6vLNosVKs9pJcM5CnMLWQGAULEa7UjDacASh%2FKjq%2FyA%2Ba5kurihBMAaJo6wqHWjlCp8Q31OVQ%2FcWJnFNlL3CFTAatxKW4%2BuOM%2BN7Tpx9bkelEuYR%2BMWxRlNMVXR0AR2aKdNjKudlpCvjHFfPwo1FMg9oWX53lm8N4oLWaFWfKxZNfXuXxwlT%2BJt%2FnlT5DrP6p2pHbugJrUuK%2FA9zlI%2BdtSPF6Sv1qXl0sy3LB6pqObnHAxVkZsd1WGTpF3iGzZjafdUDsBJ4wNL%2B6jZTRlihFTIe0%2B3mGbnF488R09w6H3eAYaq9oYkEzkFytJ%2BaTF22%2FnYs0%2FjCAZEabQcuT4HtBg9TpJFVT890lKyXoPiPT7HqcPE%2FWg5pJTTbpdUW5oxzGAKtcp%2B6%2F17e8%2B7sUf9ezLViIO8PISVWJlfAXbVDhmbphmeVKZ%2F4nTDGj%2FChljJPgM4KGka12trlTrb7c%2BR4KAV2dkp0rH%2FYK3OUaEkXD8%2Btt9h67qVoU9DrTQz4H4rmRVYg9RPTNVMW1EhiwczxeeIWI1Sxd0wf8KfAFhAWFoIz2Ndopas7aSazPO7Y%2FxGpoJHa9ijyHH8FSMK%2Fi3MQGOqUB4q%2FGPDss746tUo0KC15NPq2fbUOC5o3ELCdPd%2BeqfjQu2%2BGkV4grb3YQQQkzAn8nVn%2BZGcMUQneW8rSu5z7pQ40td24NYmLpDSMMf4Ohf5QyNIT%2FRBHP95lENBg8r%2FOelicEPY%2F3BznaGpzRTtyfYlWOnw2YWXluxlS4%2Fk35nAbiYYbnET6ZBaXtjbteQlkjgZXhj%2FdXpeKAdmbGg5BcpjgOomhJ&X-Amz-Signature=5299d349c4e80efb8f6b74a0c28a209a2f1f03b5cb569ae217afadaabf382772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
