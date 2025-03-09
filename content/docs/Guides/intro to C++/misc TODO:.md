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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC66CJCH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCeExXFTI5EEqMIu6EYHdzZVAnys3%2FsWKoA01WxyngQYgIhAIAzc9OXHvw%2BF9pAcB8nUVpadNENIrF1yRi5ZIwqLXSnKv8DCH0QABoMNjM3NDIzMTgzODA1IgxB1rUpiUCIX1nPhu8q3ANeHy%2BAByaz0pM%2BMs4EQ50W0WIfpT4KbGhTT9faBxPgpx9DjAh%2B6a%2BXjJFHtH5%2BPuypSiMnIp6VAg2K6ff%2FE5Vm62kwBOK3K4d7Y40SomjlYg23XEZiQ0P8xAsY6EuSjmgobZRF6tO4%2Fm1eaHM9%2F%2FBdcSjvV4DKKbOCY2QJscqwv4w1N1e3jN3E2e7NqgCKsgAgWMR%2BhnN%2BtBjVJ%2Fyy05Gxkssi2vqY18SNLH8Xla%2F9r73KTmmnT95qwlJES7ksN%2Bbm9Ip9xgHwD0D3KADXiH%2BbU2CSAtVGBGBt3q4iW5MSowUu5nwKhYdoJmP5jOPlyjFAqB%2B%2FTI623wWqNjOodC%2FZcLo%2F8ulRAC%2BvK2Y4QU1Jr%2FmfnNsYIm0K%2BrGFFot%2Bu8nuy692x8YxY2V1u8z6smED1L8QKEtiaM6mO%2F5kPjAerA7YDWVMNLds6Yho%2BcY6CQSJRaDhqLW8CgoKJqqbaM4FmlB8F2MAxWvoRG6NgJyW2l21NBc7U%2BzTSVxsdY3AQ%2BU%2Ftwv6rnWO2NN6MLVsd8%2BA6ernxB2ntGv3jyTIjCS6RvJVfTh1I2l5nURg5Fex7w5aup3ddjWhJC2kjPfxVOoIstz4xEt0wSi6ukgGfHDzQTIsUpZ4ll1EkMekMTC54Le%2BBjqkAQsfi6Bo3ZaOs%2FGCvvOJeN6ImI4INldchoUYlhYQIVSauvY3CyjBJh7pKlqZpWmX6rLWjaEKYl5sTtwdMeqwl3iOR1rprJdssULUdNBN3zQEPqFyBSvDr9ok5doh3yf5zZSmk9L8%2B9uztJXyWhrEXXgg16cMNyTNWUtBX3T8OMHw7%2F1rHXUodNol0%2FOchz9Kr3EGno%2BvzlhAmH1LC5JPA%2F5bCjhh&X-Amz-Signature=f93e4de56d76536abde4a71b94d0642ca47c149911bd86ea5dd9c9057453e649&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC66CJCH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCeExXFTI5EEqMIu6EYHdzZVAnys3%2FsWKoA01WxyngQYgIhAIAzc9OXHvw%2BF9pAcB8nUVpadNENIrF1yRi5ZIwqLXSnKv8DCH0QABoMNjM3NDIzMTgzODA1IgxB1rUpiUCIX1nPhu8q3ANeHy%2BAByaz0pM%2BMs4EQ50W0WIfpT4KbGhTT9faBxPgpx9DjAh%2B6a%2BXjJFHtH5%2BPuypSiMnIp6VAg2K6ff%2FE5Vm62kwBOK3K4d7Y40SomjlYg23XEZiQ0P8xAsY6EuSjmgobZRF6tO4%2Fm1eaHM9%2F%2FBdcSjvV4DKKbOCY2QJscqwv4w1N1e3jN3E2e7NqgCKsgAgWMR%2BhnN%2BtBjVJ%2Fyy05Gxkssi2vqY18SNLH8Xla%2F9r73KTmmnT95qwlJES7ksN%2Bbm9Ip9xgHwD0D3KADXiH%2BbU2CSAtVGBGBt3q4iW5MSowUu5nwKhYdoJmP5jOPlyjFAqB%2B%2FTI623wWqNjOodC%2FZcLo%2F8ulRAC%2BvK2Y4QU1Jr%2FmfnNsYIm0K%2BrGFFot%2Bu8nuy692x8YxY2V1u8z6smED1L8QKEtiaM6mO%2F5kPjAerA7YDWVMNLds6Yho%2BcY6CQSJRaDhqLW8CgoKJqqbaM4FmlB8F2MAxWvoRG6NgJyW2l21NBc7U%2BzTSVxsdY3AQ%2BU%2Ftwv6rnWO2NN6MLVsd8%2BA6ernxB2ntGv3jyTIjCS6RvJVfTh1I2l5nURg5Fex7w5aup3ddjWhJC2kjPfxVOoIstz4xEt0wSi6ukgGfHDzQTIsUpZ4ll1EkMekMTC54Le%2BBjqkAQsfi6Bo3ZaOs%2FGCvvOJeN6ImI4INldchoUYlhYQIVSauvY3CyjBJh7pKlqZpWmX6rLWjaEKYl5sTtwdMeqwl3iOR1rprJdssULUdNBN3zQEPqFyBSvDr9ok5doh3yf5zZSmk9L8%2B9uztJXyWhrEXXgg16cMNyTNWUtBX3T8OMHw7%2F1rHXUodNol0%2FOchz9Kr3EGno%2BvzlhAmH1LC5JPA%2F5bCjhh&X-Amz-Signature=83ffe0a9e6ab2267f34e85c0ae19ea3695e016db949431ffdb568dc9c0bf76dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
