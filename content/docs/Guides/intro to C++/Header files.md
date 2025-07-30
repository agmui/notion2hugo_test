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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKIG6NNO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR5hAIKmSGJgMjGJ3Mbzh6DeCbOQlQnYE196sUfiAaFwIhANf4jseAIp9pIyZqvyDbb8YvhSzxZon63UOVwCmPQbRUKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKrXwgVZ4u1OFlJ6Aq3ANS6nx3q6CgTqhepU%2FhA438WiBUKy1vecUisCtE3N1PvTHFo6fmg1wTqn9DQ6tjpgnSyYAMMKBHvFaC2AeXZkVqmugSua9EPRWZIAaRxnM3tePl8Lxs6AGPWIrm%2BUCNoFYC9uueQVmZ7rE%2Bv7u90Pw1ztUS3QUszYMiuAQZrdTKSkM1pTfhnZyJg3Nht4YabjgkzIYrrTNEDYQYPukB1m4fB2q7s5cewsCR%2BgjJ%2FC9rcjq6fXWrcDhjW%2FIupKs8BYzx5AaDKMWL%2FKlXOo7hsjBBYz2p8f46RB3EszmXmMudl%2BrHEIcjujMXsFSXhdhzUnCQnNNYrN781Cv8sUYa7K0W4jI%2F698hQMQOYkZVUoH8O5ZSrbtujWwWP9oQygcf%2B%2Bm8etwvdkZ%2FA%2Fwxm2FOR0Asf2bTPZgpLDVbNaGkZLF2XcTfIypUuCswgZJeojq%2BaQmtVSpTCdO%2FSlOrcYBMlzt433zdicM%2BY4EAxSNBONBOBYPNK5YspV2uFnTpIBivCiKx%2FZBkC0E6sgk7zk2uS0r8isANWW%2BWIl%2BK6Ck5RKm8hkbAxZ9ZhKB1x6CjAuHH98QpFJ8Zpn9dnTHQb8%2BQCHuc2Uzc%2Bi%2BARqac%2FGDE3neRn%2FaBenYHHVwv0sfU4DCdjarEBjqkAcdX2NZ4PU8yssMGxGIMFS2%2FHP3i6fyofkj6RW8sstBCf1eoKv%2BSt6voukjrXHy3Z7jzcbrxYz2NTeS5WyVB82f7KK8erFJrqw8tiggjOYroehaPSpjZjz7wBAqwztei4AQfBvRnTmC%2BIwIUFtHGne5lK0ijCtoELtPmrQ6PrOZryHRKtKGyY4tWHMMh75MLofuH8Jd5WZMdayDXZGn%2FGqM8LwYX&X-Amz-Signature=cd1bf17ee0563419aa3f17ec4f173e107602775b6860f2176b4144b318204284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
