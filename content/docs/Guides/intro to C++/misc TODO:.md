---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYSDNRM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDO83heaONdZ2Grnlp6U6IME96%2B4V%2F51QZTg6u%2BuGeKFwIhAOjFEoh1Tz5RjP94i%2BjWzytSAX9Wa%2BNYoikpK5yQTOodKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfFDyNSfUlwk8haUwq3AMSbS21n%2Fvxz0w4mBHB78bJm9tMu2rra7l6YkrfuI1zW48qtotBHeSvDB5tzJPXkqkOz80GpyVZsyvZz7UiKWt0NRSYsvqLSqcpJ8yGIiyVGgJdK0T4P8Q3Z62V6%2B7EjIG55%2Fv0FSmQl7qZEOS8A9LTAolQpve2Gd%2FG%2F3XjTL%2FUayQS5qFwHurBcq5U4Hia7pVXjrSwMfCgUZmK08ovjJcHKEezwyUwUdd3Rqt9RXEro570zmLKNIZvL5HZ9m6wXzDMZutDPwrzhb5dZjng8cyoNeonH2FmI7wMP%2FyAfYzvJaumKsNA8EYrHgw56uMA8hLBsnnfBB713zd1kleIXsLFFogM2yGqFXHViMWFXeT25XgQzn%2B7jPNNk9H1J0t0WSEchGsNaonxFFgjtTgUNkgoLqepABgs%2F%2Fywx4xRPxF1i0FDakcaiURnwdxeAIrhtUQabiAmaHXWhfQ8CH2AE8zwWhmwkWM5%2FUyCwgZchDby4VNPcGeZuS4NR9z7HdQBxGwYCt%2FQbxNE7O7DyT2Aog1zqPiYQwjX0bjXL9sX45bmIhyaAIG%2BNm6bkJLLNWedwKY%2BS25XuCzLfEg7B3qPacsdbom8yDINROiL0ww9t044Bd1LqQwTU5Xh65YzoTCKosi%2BBjqkAQSkTPB9XiY3gaEcyM7MqQL1M4cs7GhOzIBbu3orvejZvGtybyMHBR2TN6FE259gCVe8x%2B%2BGGbBiQr95m0P%2Bk%2Fg0PvJS7wRrBBHpRgz7JzMpRj87wrXNLgxkXbL7hkesckZXVU5%2BQTryy%2Fxj80Kk9TVtmxG8yPm%2BXnuyIbzVpg8X%2B%2FbZ9j8CbKZi5e7%2FLV5VBnCIZQ605wbW4q0vZzu11M9YyrWD&X-Amz-Signature=776ff1266b9c0d482026e64c9f0fd1ea7781be3ef096e200cdb67a0058cecd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYSDNRM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDO83heaONdZ2Grnlp6U6IME96%2B4V%2F51QZTg6u%2BuGeKFwIhAOjFEoh1Tz5RjP94i%2BjWzytSAX9Wa%2BNYoikpK5yQTOodKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfFDyNSfUlwk8haUwq3AMSbS21n%2Fvxz0w4mBHB78bJm9tMu2rra7l6YkrfuI1zW48qtotBHeSvDB5tzJPXkqkOz80GpyVZsyvZz7UiKWt0NRSYsvqLSqcpJ8yGIiyVGgJdK0T4P8Q3Z62V6%2B7EjIG55%2Fv0FSmQl7qZEOS8A9LTAolQpve2Gd%2FG%2F3XjTL%2FUayQS5qFwHurBcq5U4Hia7pVXjrSwMfCgUZmK08ovjJcHKEezwyUwUdd3Rqt9RXEro570zmLKNIZvL5HZ9m6wXzDMZutDPwrzhb5dZjng8cyoNeonH2FmI7wMP%2FyAfYzvJaumKsNA8EYrHgw56uMA8hLBsnnfBB713zd1kleIXsLFFogM2yGqFXHViMWFXeT25XgQzn%2B7jPNNk9H1J0t0WSEchGsNaonxFFgjtTgUNkgoLqepABgs%2F%2Fywx4xRPxF1i0FDakcaiURnwdxeAIrhtUQabiAmaHXWhfQ8CH2AE8zwWhmwkWM5%2FUyCwgZchDby4VNPcGeZuS4NR9z7HdQBxGwYCt%2FQbxNE7O7DyT2Aog1zqPiYQwjX0bjXL9sX45bmIhyaAIG%2BNm6bkJLLNWedwKY%2BS25XuCzLfEg7B3qPacsdbom8yDINROiL0ww9t044Bd1LqQwTU5Xh65YzoTCKosi%2BBjqkAQSkTPB9XiY3gaEcyM7MqQL1M4cs7GhOzIBbu3orvejZvGtybyMHBR2TN6FE259gCVe8x%2B%2BGGbBiQr95m0P%2Bk%2Fg0PvJS7wRrBBHpRgz7JzMpRj87wrXNLgxkXbL7hkesckZXVU5%2BQTryy%2Fxj80Kk9TVtmxG8yPm%2BXnuyIbzVpg8X%2B%2FbZ9j8CbKZi5e7%2FLV5VBnCIZQ605wbW4q0vZzu11M9YyrWD&X-Amz-Signature=498948e2f9941769e0f43a75b00e7f1b8cf157f7edc0c37eeecdd0ace677c9db&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
