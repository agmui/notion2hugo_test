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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBT6YO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDK%2F2avab2JxaUuujfSz19CBR3E2I%2FMUnlyLb36mcKHnQIhALTCV7F0cHp3m1ftBtPny0rmlWuVviefYwDxaPJljqwoKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8tCn9x%2BQ0JQfVZpAq3APn1FUJY2UJBIel7lj6S3pZWTX7XE4QTY5N9GbiER%2FfbyWEZ7XfVsHqGOxwVkce0866nKSbS3gp2lqbALcNVdQqdUVf0cFekR5afkxJBgUSqFlGP%2FsQ1wqo8R7j2HyeNamFzXsQU4zSW%2BqeNerhAPhflZnLUg5dd6fYyE0GwhIqNm97u1EBoMf72ClNLFRTEs4ljgT5YMosN%2BWP7D%2B5DeXZFNB0dQlUXA68rPHiBtY8qU6Qn8fYT%2Ber633NSxFXqa56mjva50PlIXOoBYjC9vbj2d0fK2LC9wGkBU7HZ9juPENYHUy1nUFldgMZCw1hsPoLGRF5MEAvsZTMo0kcAusJ1eYUhIOUAkWTLvPVYOJFYgY6D9oqfrHG%2B4KEBiGIrydu14VJuJbIkd7s0tPuWbmt7Q%2BKUIlizUn%2BtPPT%2BCk0hlZxndvTuJ%2Bmx33hayK6e73Wgy6FVwGtGlsRh3lpkHeMFq6Yk9hRBAAysFtnFmjNzlYlp0snCrmIPmI%2FN6htaOv17kkhFkczB%2BMmmVucDwSnoBHb4P%2FL8QTUObhyRTLkpPaft%2FFoOpLiqUN8xIYZx9cLcZ%2FOcC2iRXccWRnrlwOtU13K9CpVsRbi%2FbXp2gGuSJ84I%2B37tYACUCR2VDCGs%2FfBBjqkATwDlSmCDCydnfpFUzRN11sp2qZOyXQiyrPDJbEFe5NM7xyz26t2fqxy%2BERYw4HJevl%2BmUmgYE9qx5wgrhBwEqx%2BQsx1VMhCOGz4hqP7%2Fh9TYprNMFGLr2joAVzPZnd7Mb51KbeYFVfTlDNbw4Y4F2cMzceVx2YHfETz9%2F1%2F6MjkjINtN1iiHxS3Ei6rXhUT02KhUj9g2zONJGU7Wp%2FTSbKfSbU%2F&X-Amz-Signature=9b8fb24d35016c66c142bd411123c542ca8e004f9ea0767b072cca0103d15ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
