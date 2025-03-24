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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDD2JWC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcY5OImfWTxiZ87DW8g5psNZ1lOJVqkBacQ%2BhxN5tK5AiEAyxOfIRx9w7iCyGiVi7pwidB9H2VgPEBBViKFX6hy168qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImNXvs%2Bq4sl%2BgiISyrcA6xZO5H7HRn137T233H6%2FP20Wr3adYMCFW6jRVDKSQCvH%2FmWuapYlkjWUimmNjaBjHMJFS8lZAGIW7%2BS88evqbSAVkAUxUcxlHSIpjEeNFlQAgrIFmE1596MHWrnehF3Zy6vn%2FtxAzWTtOD0TiwVt85F96bwqknDNOsuE%2BSMRf7RVIZVq%2BJOaiYihJzB77b49FclcI04BUFjBoYpmo%2F6ZjpWXfLq5DWG3KTdfR%2FGBAlpnvqWkcvYyZFP0wd%2FsIEEw8gP0lVppz7%2FsQ8YSmsu2EzgN0prfs8C6JD4SLKi9KsRw2pGpDsa467TWhOXpLbGHrD9yh%2FDLZ7MTnQuRhZGBfvK6%2B9yaK3K6JBaLF%2ByA6dYq%2BCcmdUzyK7JL74u7o5QfbLzsneHkBY9ubLuwkdiaCWhDyX0rEulnMLJ1W2YUHYmE%2BEav1tW1xaC0ovAYNc6UdYK4797Mh9lI3Od7QwCiJ8q0FWbNme2Fk3VHiLJh7%2Ff2mDZV8km0%2BlQYBCdwCQbd%2FheTIlDRnPCExuraObkFSpMVtHeAPTW%2BWAtLPSNrJjTnQEQ%2FSHfzcMtl05ivkVL%2B%2FYz%2FKbT4z3k5huOPO%2BX5f63Jw%2FEG6akHbvb5UcdTKEseHRXxBuYzI55J4HZMLb%2Bhb8GOqUBTKZSTS5XzpFGJLfxbscKB4bxrggL3V9XwqwrXkP6KvGvq5ZhnmogtJfGAXCk4r7NsAhuxwJSJ8Bq3nT%2BI7oFyjtekExPRsHfrLlxFQg%2FEw3%2F9B6PpvSXwOfwzIf3gFEx4fF1fh%2BbPZTpSZDk%2FMcURUKWZWvwV1tkHuRv8YdMHxanXPm9WW0C%2BE1NYzxqqqcUIjzBqnvkeOxhIgzcbH8%2BXOKrGsZ7&X-Amz-Signature=987229cfd49c13644b50a36bbde32942b03b4936b5c6d0569df457864ac3568d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
