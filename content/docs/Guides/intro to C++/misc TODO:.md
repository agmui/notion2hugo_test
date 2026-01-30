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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEALZP4%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2KJqLYEj4BQJYKSmy2YssL8NZ3cv4LDzdLI6CzUwW4AiEAxamOXMwy69CvQlcbPFzeGDdMrtrkm5h8ZFVKox7xTxgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwpj6mQBCZlh1bfYircA%2FNZsokHe8DjgpMUk0T6TDohJaofGpCylDV0a1Loz6gOd2FNo3S3xxgXQC30XmW4qTeJRgJtXE6yTFwU8NqmBbmCBMwOb%2FvXi1cRX38Qz0L1iKBZbICmnmpOYjvO9%2F6a3XTl3edCAysBrUd541Q%2F36UcjDuZp1wxPD66wgl229wnYZQOIGo45dY57qF3oNdZ2rnvCE%2BTBcoRgS9q3yl85AqKSBk4GmWqjs3CKMg7tjPTVsI07c%2FvpbWX50VYN%2BmTBMnFo7vB0JvhK8btcpUqWukAjnxyB8%2F0VjNONEp1mtDiAym753XhrKz8dlGktbKfNDWX99WAC%2Fyl7ct04d6eMxWwch%2FSTGMMIeIKXOo7dqNiddp%2BDClettqdBgQHqKhFR9Ah3gXgUpnULuJpydPkpiupPDEvNlAVjrC1gKbjWoxe3EpqmZL9N7CPhHYdCkUWP67Wd7FY8ILQBN6ZrJ96xFLgt7EyjG8jjvkcvon7K6aGoFpJuUXb25UH19wCMhuNryAkK3mm2fPLVkQKRpq3XFpPiSKmqO8hO8NAWWvF1MkkZ9RJwcuY1GiAOvpb25qs0IaLZaDvAQIdGCB5nf%2FQxMc6m43QYcAstLkTGMVc0Vux%2Fexj67XnlmJTzQynMJ6B8MsGOqUBpahmw%2FPmuEFubew%2BUuxZif9zeTDYeeDfeTa89U9Umhu746aiAUWtYpjoz9CkyxGVTok91LzpNvFppNRfWngcHaPLXf8Pe6N8T5WGhsTLuUvYmuzmgwcH3cJRDZKQlr%2FaGWFkB5NsUjtnGPjf24FxVDg8GgBxVip0bTOBmEg34Vopc%2FeIRiuw8WkKCFwCTv6yyx4NZ0InuWYYTQLzm%2FYHskqspNz9&X-Amz-Signature=779ddca9edfdc494440d047e7c5fc016bb0fdc8c41f77bf3245b832ab5b210a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEALZP4%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2KJqLYEj4BQJYKSmy2YssL8NZ3cv4LDzdLI6CzUwW4AiEAxamOXMwy69CvQlcbPFzeGDdMrtrkm5h8ZFVKox7xTxgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwpj6mQBCZlh1bfYircA%2FNZsokHe8DjgpMUk0T6TDohJaofGpCylDV0a1Loz6gOd2FNo3S3xxgXQC30XmW4qTeJRgJtXE6yTFwU8NqmBbmCBMwOb%2FvXi1cRX38Qz0L1iKBZbICmnmpOYjvO9%2F6a3XTl3edCAysBrUd541Q%2F36UcjDuZp1wxPD66wgl229wnYZQOIGo45dY57qF3oNdZ2rnvCE%2BTBcoRgS9q3yl85AqKSBk4GmWqjs3CKMg7tjPTVsI07c%2FvpbWX50VYN%2BmTBMnFo7vB0JvhK8btcpUqWukAjnxyB8%2F0VjNONEp1mtDiAym753XhrKz8dlGktbKfNDWX99WAC%2Fyl7ct04d6eMxWwch%2FSTGMMIeIKXOo7dqNiddp%2BDClettqdBgQHqKhFR9Ah3gXgUpnULuJpydPkpiupPDEvNlAVjrC1gKbjWoxe3EpqmZL9N7CPhHYdCkUWP67Wd7FY8ILQBN6ZrJ96xFLgt7EyjG8jjvkcvon7K6aGoFpJuUXb25UH19wCMhuNryAkK3mm2fPLVkQKRpq3XFpPiSKmqO8hO8NAWWvF1MkkZ9RJwcuY1GiAOvpb25qs0IaLZaDvAQIdGCB5nf%2FQxMc6m43QYcAstLkTGMVc0Vux%2Fexj67XnlmJTzQynMJ6B8MsGOqUBpahmw%2FPmuEFubew%2BUuxZif9zeTDYeeDfeTa89U9Umhu746aiAUWtYpjoz9CkyxGVTok91LzpNvFppNRfWngcHaPLXf8Pe6N8T5WGhsTLuUvYmuzmgwcH3cJRDZKQlr%2FaGWFkB5NsUjtnGPjf24FxVDg8GgBxVip0bTOBmEg34Vopc%2FeIRiuw8WkKCFwCTv6yyx4NZ0InuWYYTQLzm%2FYHskqspNz9&X-Amz-Signature=020c93ba76b92aeb0409961fd673ad3523504c2166dd40c4fb6d91fb723e85b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
