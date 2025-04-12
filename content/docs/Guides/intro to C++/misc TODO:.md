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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HX326W%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIC7LRt4yNTvo962WXbYrSIfAtXNYP%2BeoJWykyo7dhnGrAiEAqCt5sKl5MxMf2IUqPhd6m2K8tFFaB7MNdAeK5c1I6XAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIMG2%2FXNeJuel4jlCrcA115B2rG0O8LpFJOk9WXNs%2BY%2Fs%2Fd68iyRe%2BQDGdRJSVSErt48zdMmUMSkHuJIZxHMZk5dgi6SKhtFy3UrxqWJcsK3NS5oOyuvCi%2Bd4I1CJ8DXcrwg%2FeFdC5chkCT3MRFUNE885r0KVdlVTUe6b8N2cbj%2F2whbEbKq0pdWmrKNJ5Bs8EJp5Q%2FuGh97C%2FbkavsEszwLfYoB%2FzC1PMpnzjcBaG8lxJlld7qecsH1IGQ5hBGSFreIxtbSFIAOTATWnQO7M8eVtlucFXd%2BN4TtpCGW13NoIMqie0CnA7vWHVqsv%2BfQ3wsQpbK1hi0O4zz3YOLYAVEeLOlCor4DcuDzk5N5ciO2ZsOj7sLcS1a7gUEYzgjZuSww8hu7bAdrWzH2yAt%2BwpBxFpEzrb9wxt1ozmTdlI7heGCOIoCWoXxaN1R1ZnJunU7PZr7N5cuLU7gVZUnvE50x5xroSzYmCaffjLyyXHXTQG0z39eFTB7r6b5wqad1SQPyU2uEd7gS3wiHxbOwHnLXsgmSnlbaKAx5K7aghAuh5sdO%2BHgZ9%2Fc22LbNBCCMi8LeF4tzvn2L6rggEzmYmq6vjYOK%2F4oY5J%2BKBgBWLUnzMjtZ4vmJHZx5%2FGY02kCiZsHXY1ZwfTyCUDDMK2n6L8GOqUBv3MJx5JRl4JXsfmowSZYEOSh0CQr%2BQF4HTrbZROD8fbrzLhNToAFofRBcjsxD9N7%2F7enIqsTN9U9SlkPWjyk3zf34wMBx9CanVodSnQpy88o50ARMBTg62KISCdL7QFzubPN9Xc25EgDaMpI81GZYbtfC20SFixjx6uemFEjNa8%2B3CBhoMzEge0pQBA%2FrLigWqyvZ6rX5FKddpWStIyhnKvdtuEA&X-Amz-Signature=b5aee4d97b509b0842f7375ef447f22325fc0d26cf3cb5db77bc5fcdf4ffebfe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HX326W%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIC7LRt4yNTvo962WXbYrSIfAtXNYP%2BeoJWykyo7dhnGrAiEAqCt5sKl5MxMf2IUqPhd6m2K8tFFaB7MNdAeK5c1I6XAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIMG2%2FXNeJuel4jlCrcA115B2rG0O8LpFJOk9WXNs%2BY%2Fs%2Fd68iyRe%2BQDGdRJSVSErt48zdMmUMSkHuJIZxHMZk5dgi6SKhtFy3UrxqWJcsK3NS5oOyuvCi%2Bd4I1CJ8DXcrwg%2FeFdC5chkCT3MRFUNE885r0KVdlVTUe6b8N2cbj%2F2whbEbKq0pdWmrKNJ5Bs8EJp5Q%2FuGh97C%2FbkavsEszwLfYoB%2FzC1PMpnzjcBaG8lxJlld7qecsH1IGQ5hBGSFreIxtbSFIAOTATWnQO7M8eVtlucFXd%2BN4TtpCGW13NoIMqie0CnA7vWHVqsv%2BfQ3wsQpbK1hi0O4zz3YOLYAVEeLOlCor4DcuDzk5N5ciO2ZsOj7sLcS1a7gUEYzgjZuSww8hu7bAdrWzH2yAt%2BwpBxFpEzrb9wxt1ozmTdlI7heGCOIoCWoXxaN1R1ZnJunU7PZr7N5cuLU7gVZUnvE50x5xroSzYmCaffjLyyXHXTQG0z39eFTB7r6b5wqad1SQPyU2uEd7gS3wiHxbOwHnLXsgmSnlbaKAx5K7aghAuh5sdO%2BHgZ9%2Fc22LbNBCCMi8LeF4tzvn2L6rggEzmYmq6vjYOK%2F4oY5J%2BKBgBWLUnzMjtZ4vmJHZx5%2FGY02kCiZsHXY1ZwfTyCUDDMK2n6L8GOqUBv3MJx5JRl4JXsfmowSZYEOSh0CQr%2BQF4HTrbZROD8fbrzLhNToAFofRBcjsxD9N7%2F7enIqsTN9U9SlkPWjyk3zf34wMBx9CanVodSnQpy88o50ARMBTg62KISCdL7QFzubPN9Xc25EgDaMpI81GZYbtfC20SFixjx6uemFEjNa8%2B3CBhoMzEge0pQBA%2FrLigWqyvZ6rX5FKddpWStIyhnKvdtuEA&X-Amz-Signature=7f60da7419f7564d8dc8bc43ace1ca79cd56039bd837a2fa21165a08ec0b536f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
