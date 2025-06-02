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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5KB7ZU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICbbbAWoasNECeoqB2dIEVzshNye9RZYRlA3ivrYymOeAiAg0nsPICHpgIkYsOPPdrpp%2Fwv15Mujb5L6lfEmdFGt9yqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOBYt0%2BZCEyBqKPTIKtwDtfdKKRoabaSuN6JHUuSHaWH8t9w8REhE5aGYG9trEfeKbPTsHAC93KE8R2hk5vMTv3UmyM7npXB9rJvws2JGIhIl1pLvw7nzKVet5djnrGucqvd2smyETdyC6s7H0bXPHoMWdn71vADLTf0wU%2B7IjOz4UFI1ain4Csa07igFXna%2F6hKwn9i7y7j2FewkTQ8I3HnQ0DMsV2Bb%2Fv1jEcvdTBrHYFSzzfTl4h4rXN%2F%2FKWRE3%2BCC%2FqPgtl96sFjFNPOtYVgkLGVzL77nMkCmbe35Lh%2BhbAFfvzzZf69knd1pXHnKiMQpTD3Ui00FZ6ubhQ0oBNpaX85BMXVkGPIGgvJHgSSI8bx9sJMAN6eytp%2FDjFkOb85hTsl866BE6SnwdUSiIXx5J7I5gva1heoj5wQLeB0TCST5jumeYjWGJFziP8bV5ITeqgwkU9HwPJ5gA9WN5nHIxBn5peZf3HElonLNiXkrrM2XW6nzM4FiiP0vzwcsicJ3jTbAdAHBompLrZ92gGxJU0VJsmUQ%2BJ4AcKRvAu50tm7jqHRTAuSabWZF6%2F824otwIgHr60cwh4%2BnqQYh%2FYmU9z7oj%2B7S%2BVH7xkUYzFukQe3k7ZHtqaGxvYeXKbC2ELpjTbPhG3l1N%2BEw8bT2wQY6pgGdkK9ljZpYiEXkSQFcQ7qxTcpW%2B8oOiwbUTyTkQSxiuMRmAOGMexGZB%2BxzNsXGveRwdQKpjmZVovJiYX2Uz8bFskxPHj0hiG1XpD6w1w3zuHeQvVmLymw3dacwKRiBoMk3l0yytRrI5n7QTC5pdDXpMzK2GXQ4dbqtYyvCpFe7vFzWJ89yFY8DYtXF0SQDjmc9Phuj12S5e52OMLXdk8QTZF1ogmbW&X-Amz-Signature=33b8177f16bec9d008a3249a909865a51d12f3efef37908bae085300dd4371f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
